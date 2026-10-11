
import csv
import os
from pathlib import Path

import mysql.connector
from mysql.connector import Error

# CSV files are stored in the project's data folder.
DATA_DIR = Path(__file__).resolve().parent.parent / "data"

TABLE_COLUMNS = {
    "resumes": [
        "resume_id", "name", "education", "skills",
        "experience", "projects", "target_role", "location"
    ],
    "jobs": [
        "job_id", "job_title", "company", "location",
        "required_skills", "experience", "salary_lpa"
    ],
    "skills": [
        "skill_id", "skill", "category", "level"
    ],
    "skill_gap": [
        "analysis_id", "resume_id", "job_id",
        "matched_skills", "missing_skills",
        "match_percentage", "recommendation"
    ],
}

IMPORT_ORDER = ["resumes", "jobs", "skills", "skill_gap"]


def import_csv(cursor, connection, table):
    csv_path = DATA_DIR / f"{table}.csv"
    columns = TABLE_COLUMNS[table]

    if not csv_path.is_file():
        raise FileNotFoundError(f"CSV file not found: {csv_path}")

    column_sql = ", ".join(f"`{column}`" for column in columns)
    placeholders = ", ".join(["%s"] * len(columns))
    query = f"INSERT INTO `{table}` ({column_sql}) VALUES ({placeholders})"

    count = 0

    with csv_path.open("r", encoding="utf-8-sig", newline="") as file:
        reader = csv.DictReader(file)

        if reader.fieldnames != columns:
            raise ValueError(
                f"Unexpected columns in {csv_path.name}: {reader.fieldnames}"
            )

        for row in reader:
            values = [
                row[column] if row[column] != "" else None
                for column in columns
            ]
            cursor.execute(query, values)
            count += 1

    connection.commit()
    print(f"Imported {count} rows into {table}")


def main():
    # Set these environment variables before running the script.
    password = os.getenv("DB_PASSWORD")
    if not password:
        raise RuntimeError(
            "DB_PASSWORD is not set. Set it in this PowerShell session first."
        )

    connection = None
    cursor = None

    try:
        connection = mysql.connector.connect(
            host=os.getenv("DB_HOST", "localhost"),
            port=int(os.getenv("DB_PORT", "3306")),
            user=os.getenv("DB_USER", "root"),
            password=password,
            database=os.getenv("DB_NAME", "ai_resume_platform"),
        )
        cursor = connection.cursor()

        # Check for existing data to avoid duplicate primary-key imports.
        for table in IMPORT_ORDER:
            cursor.execute(f"SELECT COUNT(*) FROM `{table}`")
            existing = cursor.fetchone()[0]
            if existing:
                raise RuntimeError(
                    f"Table '{table}' already has {existing} rows. "
                    "Import stopped to avoid duplicate records."
                )

        try:
            for table in IMPORT_ORDER:
                import_csv(cursor, connection, table)
        except Exception:
            connection.rollback()
            raise

        print("\nAll four CSV files were imported successfully.")

    except (Error, OSError, ValueError, RuntimeError) as error:
        if connection and connection.is_connected():
            connection.rollback()
        print(f"Import failed: {error}")

    finally:
        if cursor:
            cursor.close()
        if connection and connection.is_connected():
            connection.close()


if __name__ == "__main__":
    main()
