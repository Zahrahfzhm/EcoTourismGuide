"use client"


import React, { useState } from 'react';


function LoginForm() {
  const [nama_pelaku, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {nama_pelaku, password}
    try {
        const response = await fetch("api/v1/login", {
            method: "POST",
            body: JSON.stringify(data)
        }
        )
        const loginForm = await response.json()
        console.log({loginForm})

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={nama_pelaku}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
