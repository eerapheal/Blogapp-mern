import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext }  from '../../UserContext'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const login = async (ev) => {
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      // Handle successful login, e.g., save token to local storage
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        setRedirect(true);
      })
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <main>
      <form className="form" onSubmit={login}>
        <h1 className="formTitle">Log in into your account</h1>
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
        <span className="span">
          <a href="#">Forgot password?</a>
        </span>
        <input className="submit" type="submit" value="Log in" />
        <span className="span">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </main>
  );
};

export default Login;
