import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (ev) => {
    ev.preventDefault();
   
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })    
  };

  return (
    <main>
      <form className="form">
        <h1 className="formTitle">Log in into your account</h1>
        <span className="input-span">
          <label for="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" value={email}
            onChange={(ev) => setEmail(ev.target.value)} />
        </span>
        <span className="input-span">
          <label for="password" className="label">
            Password
          </label>
            onChange={(ev) => setPassword(ev.target.value)}
          <input type="password" name="password" id="password" value={password}
           onChange={(ev) => setPassword(ev.target.value)} />
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
