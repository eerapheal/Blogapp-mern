import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (ev) => {
    ev.preventDefault();

    const response = await fetch("https://santmagazine.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      navigate("/login"); // Redirect to the login page
    }
  };

  return (
    <main style={{ padding: "70px" }}>
      <form className="form" onSubmit={register}>
        <h1 className="formTitle">Sign up new user</h1>
        <span className="input-span">
          <label htmlFor="username" className="label">
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
          <label htmlFor="email" className="label">
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
          <label htmlFor="password" className="label">
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
