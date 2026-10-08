function Dashboard() {
  return (
    <div className="dashboard">

      <div className="welcome-section">
        <h1>Welcome back! 👋</h1>
        <p>Manage your resume and find the right job with AI.</p>
      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Resume Score</h3>
          <h2>82/100</h2>
          <p>Good</p>
        </div>

        <div className="stat-card">
          <h3>Jobs Found</h3>
          <h2>24</h2>
          <p>Matching jobs</p>
        </div>

        <div className="stat-card">
          <h3>Job Match</h3>
          <h2>87%</h2>
          <p>Average match</p>
        </div>

        <div className="stat-card">
          <h3>Skills Matched</h3>
          <h2>8/10</h2>
          <p>Skills detected</p>
        </div>

      </div>

      <div className="dashboard-card">
        <h2>🤖 Resume Analysis</h2>

        <div className="analysis-content">
          <div>
            <h1>82%</h1>
            <p>Resume Score</p>
          </div>

          <div>
            <h3>Strong Skills</h3>
            <p>Python • SQL • Excel • Power BI</p>
          </div>

          <div>
            <h3>Missing Skills</h3>
            <p>Tableau • Statistics</p>
          </div>
        </div>

        <button>View Full Analysis →</button>
      </div>

      <div className="dashboard-card">
        <h2>📊 Skill Gap</h2>

        <div className="skill">
          <span>Python</span>
          <div className="progress">
            <div style={{ width: "90%" }}></div>
          </div>
          <span>90%</span>
        </div>

        <div className="skill">
          <span>SQL</span>
          <div className="progress">
            <div style={{ width: "85%" }}></div>
          </div>
          <span>85%</span>
        </div>

        <div className="skill">
          <span>Power BI</span>
          <div className="progress">
            <div style={{ width: "75%" }}></div>
          </div>
          <span>75%</span>
        </div>

        <div className="skill">
          <span>Tableau</span>
          <div className="progress">
            <div style={{ width: "40%" }}></div>
          </div>
          <span>40%</span>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>💼 Recommended Jobs</h2>

        <div className="job-item">
          <div>
            <h3>Data Analyst</h3>
            <p>ABC Technologies • Bengaluru</p>
            <small>LinkedIn</small>
          </div>

          <strong>92% Match</strong>

          <button>Apply →</button>
        </div>

        <div className="job-item">
          <div>
            <h3>Junior Data Analyst</h3>
            <p>XYZ Technologies • Bengaluru</p>
            <small>Indeed</small>
          </div>

          <strong>86% Match</strong>

          <button>Apply →</button>
        </div>
      </div>

      <div className="ai-suggestion">
        <h2>💡 AI Career Suggestion</h2>
        <p>
          Improve Tableau and Statistics to increase your Data Analyst
          job match score.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;