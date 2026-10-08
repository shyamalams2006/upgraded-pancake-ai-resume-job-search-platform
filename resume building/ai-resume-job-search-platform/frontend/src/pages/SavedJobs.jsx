function SavedJobs() {
  return (
    <div className="saved-jobs-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>⭐ Saved Jobs</h1>
        <p>
          Keep track of the jobs you are interested in.
        </p>
      </div>

      {/* Saved Jobs Summary */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Saved Jobs</h3>
          <h2>5</h2>
          <p>Total saved jobs</p>
        </div>

        <div className="stat-card">
          <h3>High Matches</h3>
          <h2>3</h2>
          <p>Above 80% match</p>
        </div>

        <div className="stat-card">
          <h3>Applied</h3>
          <h2>2</h2>
          <p>Applications sent</p>
        </div>

        <div className="stat-card">
          <h3>Top Match</h3>
          <h2>92%</h2>
          <p>Best saved job</p>
        </div>

      </div>

      {/* Saved Jobs List */}
      <div className="saved-jobs-list">

        {/* Job 1 */}
        <div className="saved-job-card">

          <div className="saved-job-main">

            <div className="saved-job-title">
              <h2>Data Analyst</h2>
              <p>ABC Technologies</p>
            </div>

            <span className="saved-match-badge">
              92% Match
            </span>

          </div>

          <div className="saved-job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Full Time</span>
            <span>🌐 LinkedIn</span>
          </div>

          <div className="saved-job-skills">
            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
          </div>

          <div className="saved-job-actions">

            <button className="remove-job-button">
              🗑 Remove
            </button>

            <button className="apply-job-button">
              Apply →
            </button>

          </div>

        </div>

        {/* Job 2 */}
        <div className="saved-job-card">

          <div className="saved-job-main">

            <div className="saved-job-title">
              <h2>Junior Data Analyst</h2>
              <p>XYZ Technologies</p>
            </div>

            <span className="saved-match-badge">
              86% Match
            </span>

          </div>

          <div className="saved-job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Full Time</span>
            <span>🌐 Indeed</span>
          </div>

          <div className="saved-job-skills">
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Python</span>
          </div>

          <div className="saved-job-actions">

            <button className="remove-job-button">
              🗑 Remove
            </button>

            <button className="apply-job-button">
              Apply →
            </button>

          </div>

        </div>

        {/* Job 3 */}
        <div className="saved-job-card">

          <div className="saved-job-main">

            <div className="saved-job-title">
              <h2>Business Data Analyst</h2>
              <p>DataHive Solutions</p>
            </div>

            <span className="saved-match-badge">
              81% Match
            </span>

          </div>

          <div className="saved-job-details">
            <span>📍 Bengaluru</span>
            <span>💼 Internship</span>
            <span>🌐 LinkedIn</span>
          </div>

          <div className="saved-job-skills">
            <span>Excel</span>
            <span>Power BI</span>
            <span>SQL</span>
            <span>Statistics</span>
          </div>

          <div className="saved-job-actions">

            <button className="remove-job-button">
              🗑 Remove
            </button>

            <button className="apply-job-button">
              Apply →
            </button>

          </div>

        </div>

      </div>

      {/* AI Suggestion */}
      <div className="ai-suggestion">

        <h2>💡 AI Career Suggestion</h2>

        <p>
          The Data Analyst position at ABC Technologies is your
          strongest saved match. Consider applying to this position first.
        </p>

      </div>

    </div>
  );
}

export default SavedJobs;