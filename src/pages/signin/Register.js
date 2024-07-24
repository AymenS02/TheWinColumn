import React, { useState } from "react"
import './Register.scss';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/register", { email, password, firstName, lastName});
            if (res.data.msg === "User already exists") {
                alert("User already exists");
            } else {
                navigate("/courses", { state: { id: email } });
            }
        } catch (e) {
            alert("Error during registration");
            console.log(e);
        }
    }

    return (
        <div className="register">
            <div className="box">
                <h1 className="title">Create an Account!</h1>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="email" onChange={(e) => { setFirstName(e.target.value) }} placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="email" onChange={(e) => { setLastName(e.target.value) }} placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Re-type Password</label>
                        <input type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <button type="submit" onClick={submit}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
