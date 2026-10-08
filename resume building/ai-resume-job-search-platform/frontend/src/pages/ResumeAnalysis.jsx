function ResumeAnalysis() {
  return (
    <div className="resume-analysis-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>🤖 Resume Analysis</h1>
        <p>Get an AI-powered overview of your resume.</p>
      </div>

      {/* Resume Score */}
      <div className="analysis-score-card">

        <div>
          <h2>Resume Score</h2>
          <p>Your resume is performing well.</p>
        </div>

        <div className="score-circle">
          <strong>82</strong>
          <span>/100</span>
        </div>

      </div>

      {/* Analysis Summary */}
      <div className="analysis-grid">

        {/* Strengths */}
        <div className="analysis-card">
          <h2>✅ Strong Skills</h2>

          <div className="skill-tags">
            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
          </div>
        </div>

        {/* Missing Skills */}
        <div className="analysis-card">
          <h2>⚠️ Missing Skills</h2>

          <div className="skill-tags">
            <span>Tableau</span>
            <span>Statistics</span>
          </div>
        </div>

      </div>

      {/* Resume Strengths */}
      <div className="analysis-card">

        <h2>📈 Resume Strengths</h2>

        <div className="analysis-item">
          <span>Technical Skills</span>
          <strong>90%</strong>
        </div>

        <div className="analysis-item">
          <span>Education</span>
          <strong>85%</strong>
        </div>

        <div className="analysis-item">
          <span>Projects</span>
          <strong>80%</strong>
        </div>

        <div className="analysis-item">
          <span>Experience</span>
          <strong>70%</strong>
        </div>

      </div>

      {/* AI Suggestions */}
      <div className="ai-suggestion">

        <h2>💡 AI Suggestions</h2>

        <ul>
          <li>Add more measurable achievements to your projects.</li>
          <li>Improve your Statistics knowledge.</li>
          <li>Add Tableau to your technical skills.</li>
          <li>Use stronger action words in your resume.</li>
        </ul>

      </div>

    </div>
  );
}

export default ResumeAnalysis;