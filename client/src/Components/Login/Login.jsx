import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
    <form className="form">
    <h1 className="formTitle">Log in into your account</h1>
    <span className="input-span">
    <label for="email" className="label">Email</label>
    <input type="email" name="email" id="email" /></span>
    <span className="input-span" >
    <label for="password" className="label">Password</label>
    <input type="password" name="password" id="password" /></span>
    <span className="span"><a href="#">Forgot password?</a></span>
    <input className="submit" type="submit" value="Log in" />
    <span className="span">Don't have an account? <Link to="/signup">Sign up</Link></span>
  </form>
  </main>
  )
}

export default Login
