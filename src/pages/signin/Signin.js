import React from 'react';
import './Signin.scss';

function Signin() {
  return (
    <div className="signin">
        <div className="box">
            <h1 className="title">Welcome Back!</h1>
                <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </div>
                <button type="submit">Sign In</button>
            </form>

            <p>Don't have an account yet? <a href="/register">Register</a></p>
        </div>
    </div>
  );
}

export default Signin;