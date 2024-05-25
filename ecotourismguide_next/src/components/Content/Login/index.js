"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


function LoginForm() {
  const [nama_pelaku, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {nama_pelaku, password}
    try {
        const response = await fetch("api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        )
        const loginForm = await response.json();
        console.log({loginForm})
        if (loginForm.isAuthenticated) {
            router.push('/UMKM/Dashboard'); // Redirect to a dashboard page or some protected page
        } else {
            setError('Invalid credentials');
        }

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container bg-blue-100 p-8 rounded-lg shadow-lg">
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={nama_pelaku}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="login-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
