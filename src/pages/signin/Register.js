import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/register", { email, password, firstName, lastName });
            if (res.data.msg === "User already exists") {
                alert("User already exists");
            } else {
                navigate("/sign-in", { state: { id: email } });
            }
        } catch (e) {
            alert("Error during registration");
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center justify-center bg-[#AECDD9] m-10 p-8 rounded-3xl border-2 border-[#333738] shadow-lg w-[50vh]">
                <h1 className="mt-10 text-3xl">Create an Account!</h1>
                <form className="flex flex-col min-w-[40vh] mt-4">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="first-name" className="inline-block w-[150px] mr-2">First Name</label>
                        <input
                            type="text"
                            id="first-name"
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            className="w-full h-[2vh] p-2 border rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="last-name" className="inline-block w-[150px] mr-2">Last Name</label>
                        <input
                            type="text"
                            id="last-name"
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            className="w-full h-[2vh] p-2 border rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="inline-block w-[150px] mr-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full h-[2vh] p-2 border rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="inline-block w-[150px] mr-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full h-[2vh] p-2 border rounded"
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="re-password" className="inline-block w-[150px] mr-2">Re-type Password</label>
                        <input
                            type="password"
                            id="re-password"
                            placeholder="Re-type Password"
                            className="w-full h-[2vh] p-2 border rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={submit}
                        className="mt-2 px-4 py-2 bg-[#333738] text-[#e3dddd] border border-[#e3dddd] rounded-lg cursor-pointer transition-colors hover:bg-[#e3dddd] hover:text-[#333738] hover:border-[#333738]"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
