function JobRecommendations() {
  return (
    <div className="job-recommendations-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>💼 Job Recommendations</h1>
        <p>
          Find jobs that match your skills and resume.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="job-search-card">

        <input
          type="text"
          placeholder="🔍 Search job title or skill"
        />

        <select>
          <option>All Locations</option>
          <option>Bengaluru</option>
          <option>Hyderabad</option>
          <option>Chennai</option>
          <option>Mumbai</option>
          <option>Remote</option>
        </select>

        <select>
          <option>All Job Types</option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Part Time</option>
        </select>

        <button>
          Search Jobs
        </button>

      </div>

      {/* Job Summary */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Jobs Found</h3>
          <h2>24</h2>
          <p>Matching your profile</p>
        </div>

        <div className="stat-card">
          <h3>High Matches</h3>
          <h2>8</h2>
          <p>Above 80% match</p>
        </div>

        <div className="stat-card">
          <h3>Saved Jobs</h3>
          <h2>5</h2>
          <p>Your saved jobs</p>
        </div>

        <div className="stat-card">
          <h3>Top Match</h3>
          <h2>92%</h2>
          <p>Best job match</p>
        </div>

      </div>

      {/* Job Listings */}
      <div className="jobs-list">

        {/* Job 1 */}
        <div className="job-card">

          <div className="job-card-header">
            <div>
              <h2>Data Analyst</h2>
              <p>ABC Technologies</p>
            </div>

            <span className="match-badge">
              92% Match
            </span>
          </div>

          <div className="job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Full Time</span>
            <span>🌐 LinkedIn</span>
          </div>

          <p className="job-description">
            Analyze business data, create reports and dashboards,
            and provide insights to support business decisions.
          </p>

          <div className="required-skills">
            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
          </div>

          <div className="job-actions">
            <button className="save-button">
              ⭐ Save Job
            </button>

            <button className="apply-button">
              Apply →
            </button>
          </div>

        </div>

        {/* Job 2 */}
        <div className="job-card">

          <div className="job-card-header">
            <div>
              <h2>Junior Data Analyst</h2>
              <p>XYZ Technologies</p>
            </div>

            <span className="match-badge">
              86% Match
            </span>
          </div>

          <div className="job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Full Time</span>
            <span>🌐 Indeed</span>
          </div>

          <p className="job-description">
            Work with datasets, prepare reports, identify trends,
            and support the analytics team.
          </p>

          <div className="required-skills">
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Python</span>
          </div>

          <div className="job-actions">
            <button className="save-button">
              ⭐ Save Job
            </button>

            <button className="apply-button">
              Apply →
            </button>
          </div>

        </div>

        {/* Job 3 */}
        <div className="job-card">

          <div className="job-card-header">
            <div>
              <h2>Business Data Analyst</h2>
              <p>DataHive Solutions</p>
            </div>

            <span className="match-badge">
              81% Match
            </span>
          </div>

          <div className="job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Internship</span>
            <span>🌐 LinkedIn</span>
          </div>

          <p className="job-description">
            Assist in analyzing business data and building
            interactive dashboards for decision-making.
          </p>

          <div className="required-skills">
            <span>Excel</span>
            <span>Power BI</span>
            <span>SQL</span>
            <span>Statistics</span>
          </div>

          <div className="job-actions">
            <button className="save-button">
              ⭐ Save Job
            </button>

            <button className="apply-button">
              Apply →
            </button>
          </div>

        </div>

      </div>

      {/* AI Recommendation */}
      <div className="ai-suggestion">

        <h2>💡 AI Job Recommendation</h2>

        <p>
          Your strongest matches are Data Analyst and Junior Data Analyst
          roles. Improve Tableau and Statistics to unlock more job opportunities.
        </p>

      </div>

    </div>
  );
}

export default JobRecommendations;