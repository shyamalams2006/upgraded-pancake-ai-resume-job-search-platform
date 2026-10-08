function Profile() {
  return (
    <div className="profile-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>👤 Profile</h1>
        <p>
          Manage your personal information and career details.
        </p>
      </div>

      {/* Profile Overview */}
      <div className="profile-overview-card">

        <div className="profile-avatar">
          K
        </div>

        <div className="profile-main-info">
          <h2>Keerthi</h2>
          <p>Data Analyst Aspirant</p>
          <span>📍 Bengaluru</span>
        </div>

        <button className="edit-profile-button">
          ✏️ Edit Profile
        </button>

      </div>

      {/* Personal Information */}
      <div className="dashboard-card">

        <h2>👤 Personal Information</h2>

        <div className="profile-info-grid">

          <div className="profile-info-item">
            <span>Full Name</span>
            <strong>Keerthi</strong>
          </div>

          <div className="profile-info-item">
            <span>Email</span>
            <strong>keerthi@example.com</strong>
          </div>

          <div className="profile-info-item">
            <span>Phone</span>
            <strong>+91 XXXXX XXXXX</strong>
          </div>

          <div className="profile-info-item">
            <span>Location</span>
            <strong>Bengaluru, Karnataka</strong>
          </div>

        </div>

      </div>

      {/* Education & Career */}
      <div className="profile-two-column">

        <div className="dashboard-card">

          <h2>🎓 Education</h2>

          <div className="profile-detail">
            <h3>BCA - Data Science</h3>
            <p>Bachelor of Computer Applications</p>
            <span>Currently Studying</span>
          </div>

        </div>

        <div className="dashboard-card">

          <h2>🎯 Career Goal</h2>

          <div className="profile-detail">
            <h3>Data Analyst</h3>
            <p>
              Looking for opportunities to start a career
              in data analytics.
            </p>
          </div>

        </div>

      </div>

      {/* Skills */}
      <div className="dashboard-card">

        <h2>💻 Skills</h2>

        <div className="profile-skills">

          <span>Python</span>
          <span>SQL</span>
          <span>Excel</span>
          <span>Power BI</span>
          <span>Data Analysis</span>
          <span>Machine Learning</span>

        </div>

      </div>

      {/* Profile Completion */}
      <div className="dashboard-card">

        <div className="profile-completion-header">
          <h2>📈 Profile Completion</h2>
          <strong>80%</strong>
        </div>

        <div className="profile-progress">
          <div style={{ width: '80%' }}></div>
        </div>

        <p className="profile-completion-text">
          Complete your profile to improve your job recommendations.
        </p>

      </div>

    </div>
  );
}

export default Profile;