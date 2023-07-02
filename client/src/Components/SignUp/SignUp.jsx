import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (ev) => {
    ev.preventDefault();
   
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 200) {
      alart('resgistration successful');
    }else {
      alart('resgistration failed');
    }
      // .then(response => response.json())
      // .then(data => {
      //   // Handle the successful response
      // })
      // .catch(error => {
      //   console.error('An error occurred:', error);
      //   // Handle the error and display an appropriate message to the user
      // });

      
  };

  return (
    <main>
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
