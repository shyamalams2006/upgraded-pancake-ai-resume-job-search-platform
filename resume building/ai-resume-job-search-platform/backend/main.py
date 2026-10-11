
from fastapi import FastAPI, HTTPException, Query
from mysql.connector import Error

from database import get_db_connection

app = FastAPI(
    title="AI Resume Job Search Platform API",
    description="Backend API for AI Resume and Job Search Platform",
    version="1.0.0",
)


def fetch_all(query, params=None):
    """Execute a SELECT query and return rows as dictionaries."""
    connection = None
    cursor = None

    try:
        connection = get_db_connection()
        cursor = connection.cursor(dictionary=True)
        cursor.execute(query, params or ())
        return cursor.fetchall()
    except (Error, RuntimeError):
        raise HTTPException(
            status_code=503,
            detail="Database unavailable. Check the database configuration.",
        )
    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None and connection.is_connected():
            connection.close()


@app.get("/")
def root():
    return {
        "message": "AI Resume Job Search Platform API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "API is working successfully",
    }


@app.get("/jobs")
def get_jobs(
    limit: int = Query(default=20, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
):
    jobs = fetch_all(
        "SELECT * FROM jobs ORDER BY job_id LIMIT %s OFFSET %s",
        (limit, offset),
    )
    return {"count": len(jobs), "data": jobs}


@app.get("/jobs/{job_id}")
def get_job(job_id: str):
    jobs = fetch_all(
        "SELECT * FROM jobs WHERE job_id = %s",
        (job_id,),
    )
    if not jobs:
        raise HTTPException(status_code=404, detail="Job not found")
    return jobs[0]


@app.get("/resumes")
def get_resumes(
    limit: int = Query(default=20, ge=1, le=100),
    offset: int = Query(default=0, ge=0),
):
    resumes = fetch_all(
        "SELECT * FROM resumes ORDER BY resume_id LIMIT %s OFFSET %s",
        (limit, offset),
    )
    return {"count": len(resumes), "data": resumes}


@app.get("/skills")
def get_skills():
    skills = fetch_all(
        "SELECT * FROM skills ORDER BY skill_id"
    )
    return {"count": len(skills), "data": skills}


@app.get("/skill-gap/{resume_id}")
def get_skill_gap(resume_id: str):
    analyses = fetch_all(
        """
        SELECT analysis_id, resume_id, job_id, matched_skills,
               missing_skills, match_percentage, recommendation
        FROM skill_gap
        WHERE resume_id = %s
        ORDER BY analysis_id
        """,
        (resume_id,),
    )
    return {"count": len(analyses), "data": analyses}
