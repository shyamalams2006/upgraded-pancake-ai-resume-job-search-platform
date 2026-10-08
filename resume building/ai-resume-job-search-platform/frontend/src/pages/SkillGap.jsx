function SkillGap() {
  return (
    <div className="skill-gap-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>📊 Skill Gap</h1>
        <p>
          Understand your current skills and identify skills you need to improve.
        </p>
      </div>

      {/* Skill Overview */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Skills Matched</h3>
          <h2>8/10</h2>
          <p>Good progress</p>
        </div>

        <div className="stat-card">
          <h3>Strong Skills</h3>
          <h2>4</h2>
          <p>High proficiency</p>
        </div>

        <div className="stat-card">
          <h3>Skills to Improve</h3>
          <h2>2</h2>
          <p>Needs attention</p>
        </div>

        <div className="stat-card">
          <h3>Job Match</h3>
          <h2>87%</h2>
          <p>Current match</p>
        </div>

      </div>

      {/* Your Skills */}
      <div className="dashboard-card">

        <h2>💪 Your Skills</h2>

        <div className="skill">
          <span>Python</span>

          <div className="progress">
            <div style={{ width: '90%' }}></div>
          </div>

          <span>90%</span>
        </div>

        <div className="skill">
          <span>SQL</span>

          <div className="progress">
            <div style={{ width: '85%' }}></div>
          </div>

          <span>85%</span>
        </div>

        <div className="skill">
          <span>Power BI</span>

          <div className="progress">
            <div style={{ width: '75%' }}></div>
          </div>

          <span>75%</span>
        </div>

        <div className="skill">
          <span>Excel</span>

          <div className="progress">
            <div style={{ width: '80%' }}></div>
          </div>

          <span>80%</span>
        </div>

      </div>

      {/* Skills to Improve */}
      <div className="dashboard-card">

        <h2>⚠️ Skills to Improve</h2>

        <div className="skill">

          <span>Tableau</span>

          <div className="progress">
            <div style={{ width: '40%' }}></div>
          </div>

          <span>40%</span>

        </div>

        <div className="skill">

          <span>Statistics</span>

          <div className="progress">
            <div style={{ width: '45%' }}></div>
          </div>

          <span>45%</span>

        </div>

      </div>

      {/* AI Recommendation */}
      <div className="ai-suggestion">

        <h2>💡 AI Skill Recommendation</h2>

        <p>
          Focus on learning Tableau and Statistics to improve your
          Data Analyst job match score.
        </p>

        <button>
          View Learning Recommendations →
        </button>

      </div>

    </div>
  );
}

export default SkillGap;