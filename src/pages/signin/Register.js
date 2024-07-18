import React from 'react';
import './Register.scss';

function Register() {
    const passwordMatch = true; // or false, depending on your logic
    return (
        <div className="register">
            <div className="box">
                <h1 className="title">Create an Account!</h1>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Re-type Password</label>
                        <input type="password" id="retype-password" name="retype-password" placeholder="Password" />
                    </div>
                    {passwordMatch ? (
                        <button type="submit">Register</button>
                    ) : (
                        <p>Passwords do not match</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Register;