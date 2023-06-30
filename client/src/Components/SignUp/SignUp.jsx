import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const register = async (ev) => {
    ev.preventDefault();
    await fetch('http://localhost:4000', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-type': 'application/json' },
    });
  };
  
  return (
    <main>
      <form className="form" onSumit={register}>
        <h1 className="formTitle">Sign up new user</h1>
        <span className="input-span">
          <label for="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </span>
        <span className="input-span">
          <label for="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </span>
        <span className="input-span">
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </span>
        <input className="submit" type="submit" value="Sign Up" />
        <span className="span">
          You already have an account? <Link to="/login">Sign in</Link>
        </span>
      </form>
    </main>
  );
};

export default SignUp;
