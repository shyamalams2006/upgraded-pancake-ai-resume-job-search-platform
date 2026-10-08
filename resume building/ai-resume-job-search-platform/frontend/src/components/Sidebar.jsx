import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        AI Resume & Job Search Platform
      </div>

      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link>

        <Link to="/resume">📄 My Resume</Link>
        <Link to="/resume-analysis">🤖 Resume Analysis</Link>
        <Link to="/skill-gap">📊 Skill Gap</Link>

        <Link to="/jobs">💼 Job Recommendations</Link>
        <Link to="/job-analysis">🔍 Job Analysis</Link>
        <Link to="/saved-jobs">⭐ Saved Jobs</Link>

        <Link to="/profile">👤 Profile</Link>
        <Link to="/settings">⚙️ Settings</Link>

        <Link to="/logout" className="logout">
          🚪 Logout
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;