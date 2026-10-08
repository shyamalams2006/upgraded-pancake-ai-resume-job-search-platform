function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🤖
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Login to your AI Resume & Job Search Platform
        </p>

        <div className="login-form">

          <div className="login-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="login-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot Password?
            </a>

          </div>

          <button className="login-button">
            Login →
          </button>

        </div>

        <p className="signup-text">
          Don't have an account?
          <a href="#signup"> Create Account</a>
        </p>

      </div>

    </div>
  );
}

export default Login;