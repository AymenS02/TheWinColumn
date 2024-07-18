import React, { useState } from "react"
import './Register.scss';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/register",{
                email,password
            })
            .then(res=>{
                if(res.data === "User already exists"){
                    alert("User already exists")
                }
                else if(res.data === "does not exist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
      <div className="register">
          <div className="box">
              <h1 className="title">Create an Account!</h1>
                  <form className="register-form">
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