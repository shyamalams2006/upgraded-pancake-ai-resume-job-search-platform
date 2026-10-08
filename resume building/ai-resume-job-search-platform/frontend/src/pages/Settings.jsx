function Settings() {
  return (
    <div className="settings-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>⚙️ Settings</h1>
        <p>
          Manage your account, notifications, and job preferences.
        </p>
      </div>

      {/* Account Settings */}
      <div className="settings-card">

        <h2>👤 Account Settings</h2>

        <div className="settings-form">

          <div className="settings-group">
            <label>Email Address</label>
            <input
              type="email"
              value="keerthi@example.com"
              readOnly
            />
          </div>

          <div className="settings-group">
            <label>Language</label>
            <select defaultValue="English">
              <option>English</option>
              <option>Kannada</option>
              <option>Hindi</option>
            </select>
          </div>

        </div>

      </div>

      {/* Notification Settings */}
      <div className="settings-card">

        <h2>🔔 Notifications</h2>

        <div className="setting-option">
          <div>
            <strong>Job Recommendations</strong>
            <p>Receive notifications about new matching jobs.</p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="setting-option">
          <div>
            <strong>Application Updates</strong>
            <p>Receive updates about your job applications.</p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="setting-option">
          <div>
            <strong>AI Career Suggestions</strong>
            <p>Receive suggestions to improve your career profile.</p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

      </div>

      {/* Job Preferences */}
      <div className="settings-card">

        <h2>💼 Job Preferences</h2>

        <div className="settings-form">

          <div className="settings-group">
            <label>Preferred Job Role</label>
            <select defaultValue="Data Analyst">
              <option>Data Analyst</option>
              <option>Business Analyst</option>
              <option>Data Scientist</option>
              <option>Business Intelligence Analyst</option>
            </select>
          </div>

          <div className="settings-group">
            <label>Preferred Location</label>
            <select defaultValue="Bengaluru">
              <option>Bengaluru</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="settings-group">
            <label>Job Type</label>
            <select defaultValue="Full Time">
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
            </select>
          </div>

        </div>

      </div>

      {/* Privacy */}
      <div className="settings-card">

        <h2>🔒 Privacy</h2>

        <div className="setting-option">
          <div>
            <strong>Profile Visibility</strong>
            <p>
              Allow your profile to be visible for job recommendations.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

        <div className="setting-option">
          <div>
            <strong>Resume Visibility</strong>
            <p>
              Allow your resume information to be used for job matching.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked
          />
        </div>

      </div>

      {/* Save Button */}
      <div className="settings-actions">

        <button className="save-settings-button">
          💾 Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;