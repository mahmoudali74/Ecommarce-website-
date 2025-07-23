import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box glass">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to your account</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>

          <div className="divider">or</div>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>

          <p className="signup">Don't have an account? <a href="#">Sign up</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
