// LoginPage.js
import React from 'react';
import '../App.css';

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
