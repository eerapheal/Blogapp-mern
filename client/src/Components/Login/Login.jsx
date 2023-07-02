import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      });

      if (response.ok) {
        const token = await response.json();
        // Handle successful login, e.g., save token to local storage
        setError('Login successful');
      } else {
        const errorData = await response.json();
        setError(errorData);
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <main>
      <form className="form" onSubmit={login}>
        <h1 className="formTitle">Log in into your account</h1>
        <span className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" value={email}
            onChange={(ev) => setEmail(ev.target.value)} />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" name="password" id="password" value={password}
            onChange={(ev) => setPassword(ev.target.value)} />
        </span>
        <span className="span">
          <a href="#">Forgot password?</a>
        </span>
        {error && <p className="error">{error}</p>}
        <input className="submit" type="submit" value="Log in" />
        <span className="span">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </main>
  );
};

export default Login;
