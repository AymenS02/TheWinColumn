import React, { useState } from "react";
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
                sessionStorage.setItem('userEmail', email);
                navigate("/");
            } else if (res.data.msg === "does not exist") {
                alert("User has not been registered yet");
            }
        } catch (e) {
            alert("Wrong Details");
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center justify-center bg-[#AECDD9] mt-10 p-8 rounded-[1rem] border-2 border-[#333738] shadow-lg w-[50vh]">
                <h1 className="mt-4 text-3xl">Log In!</h1>
                <form className="flex flex-col min-w-[40vh] mt-4" onSubmit={submit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full h-8 p-2 border rounded-md"/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-8 p-2 border rounded-md"/>
                    </div>
                    <button type="submit" className="mt-2 px-4 py-2 bg-[#333738] text-[#e3dddd] border border-[#e3dddd] rounded-lg cursor-pointer transition-colors hover:bg-[#e3dddd] hover:text-[#333738] hover:border-[#333738]">Sign In</button>
                </form>
                <p className="mt-4">Don't have an account yet? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
            </div>
        </div>
    );
}

export default Signin;

