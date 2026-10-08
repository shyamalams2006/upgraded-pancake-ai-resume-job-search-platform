function Logout() {
  return (
    <div className="logout-page">

      <div className="logout-card">

        <div className="logout-icon">
          🚪
        </div>

        <h1>Logout</h1>

        <p>
          Are you sure you want to logout from
          <strong> AI Resume & Job Search Platform</strong>?
        </p>

        <div className="logout-actions">

          <button className="cancel-logout-button">
            Cancel
          </button>

          <button className="confirm-logout-button">
            🚪 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Logout;