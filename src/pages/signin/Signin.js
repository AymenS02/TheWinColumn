import React from 'react';
import './Signin.scss';

function Signin() {
  return (
    <div className="signin">
      <h1 className="title">Sign In</h1>
      <form className="signin-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;