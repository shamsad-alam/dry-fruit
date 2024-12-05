// RegistrationPage.js
import React from 'react';
import '../App.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
