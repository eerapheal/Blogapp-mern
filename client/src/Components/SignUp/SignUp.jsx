import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main>
    <form className="form">
        <h1 className="formTitle">Sign up new user</h1>
    <span className="input-span">
    <label for="email" className="label">Email</label>
    <input type="email" name="email" id="email" /></span>
    <span className="input-span">
    <label for="password" className="label">Password</label>
    <input type="password" name="password" id="password" /></span>
    <input className="submit" type="submit" value="Sign Up" />
    <span className="span">You already have an account? <Link to="/login">Sign in</Link></span>
  </form>
    </main>

  )
}

export default SignUp
