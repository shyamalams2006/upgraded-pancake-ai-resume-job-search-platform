function JobAnalysis() {
  return (
    <div className="job-analysis-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>🔍 Job Analysis</h1>
        <p>
          Compare your resume skills with a job description.
        </p>
      </div>

      {/* Job Details Form */}
      <div className="job-analysis-form">

        <h2>📋 Enter Job Details</h2>

        <div className="form-row">

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              placeholder="Example: Data Analyst"
            />
          </div>

          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              placeholder="Example: ABC Technologies"
            />
          </div>

        </div>

        <div className="form-group">
          <label>Job Description</label>

          <textarea
            rows="8"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>

        <button className="analyze-job-button">
          🤖 Analyze Job
        </button>

      </div>

      {/* Analysis Result */}
      <div className="dashboard-card">

        <div className="analysis-result-header">
          <div>
            <h2>📊 Job Match Analysis</h2>
            <p>Data Analyst • ABC Technologies</p>
          </div>

          <div className="job-match-score">
            <strong>87%</strong>
            <span>Match</span>
          </div>
        </div>

      </div>

      {/* Matching Skills */}
      <div className="analysis-grid">

        <div className="analysis-card">

          <h2>✅ Matching Skills</h2>

          <div className="skill-tags">

            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>

          </div>

        </div>

        <div className="analysis-card">

          <h2>⚠️ Missing Skills</h2>

          <div className="skill-tags">

            <span>Tableau</span>
            <span>Statistics</span>

          </div>

        </div>

      </div>

      {/* Skill Comparison */}
      <div className="dashboard-card">

        <h2>📈 Skill Comparison</h2>

        <div className="analysis-item">
          <span>Python</span>
          <strong>90%</strong>
        </div>

        <div className="analysis-item">
          <span>SQL</span>
          <strong>85%</strong>
        </div>

        <div className="analysis-item">
          <span>Excel</span>
          <strong>80%</strong>
        </div>

        <div className="analysis-item">
          <span>Power BI</span>
          <strong>75%</strong>
        </div>

        <div className="analysis-item">
          <span>Tableau</span>
          <strong>40%</strong>
        </div>

        <div className="analysis-item">
          <span>Statistics</span>
          <strong>45%</strong>
        </div>

      </div>

      {/* AI Recommendation */}
      <div className="ai-suggestion">

        <h2>💡 AI Job Recommendation</h2>

        <p>
          You are a strong match for this Data Analyst position.
          Improve Tableau and Statistics to increase your chances
          of getting selected.
        </p>

      </div>

    </div>
  );
}

export default JobAnalysis;