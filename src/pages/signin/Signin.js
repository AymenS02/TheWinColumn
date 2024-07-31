import React, { useState } from "react";
import './Signin.scss';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signin", { email, password });
            if (res.data.msg === "User already exists") {
                sessionStorage.setItem('userFirstName', res.data.firstName);
                navigate("/", { state: { id: res.data.firstName } });
            } else if (res.data.msg === "does not exist") {
                alert("User has not been registered yet");
            }
        } catch (e) {
            alert("Wrong Details");
            console.log(e);
        }
    }

    return (
        <div className="signin">
            <div className="box">
                <h1 className="title">Log In!</h1>
                <form className="signin-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                    </div>
                    <button type="submit" onClick={submit}>Sign In</button>
                </form>
                <p>Don't have an account yet? <a href="/register">Register</a></p>
            </div>
        </div>
    );
}

export default Signin;
