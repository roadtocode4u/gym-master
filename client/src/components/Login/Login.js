import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import  ImgLoginGirl from './img/login-girl.png';
import "./Login.css";

export default  function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    const response = await axios.post('/login', {
      email: email,
      password: password,
    })
    if (response.data.status) {
      // save user data in localStorage to access current user
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))
      alert("Login Successfully")
      navigate('/')
    }
    else {
      alert(response.data.message)
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="signup-background">
        <div className="container">
          <div className="title-container">
            <h1 className="text-center">Login-Form</h1>
          </div>
          <div className="admin-login">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-boy mx-auto d-block"
                  src={ImgLoginGirl}
                  alt="workout"
                />

              </div>
              <div className="col-md-6">
                <form>

                  <div className="mt-4">
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      placeholder="Enter Email"


                    />

                  </div>
                  <div className="mt-4">
                    <input
                      type="password"
                      className="form-control"
                      id="userPassword"
                      placeholder="Enter Password"

                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="button"
                      className="custom-btn  btn-lg btn-login mt-3">
                      Login
                    </button>
                  </div>
                  <h5 className="text-center mt-3">
                    {" "}
                    Dont have an account? <a href="./signup" className="login-anchor">Sign up</a>
                  </h5>
                </form>
                
                </div>
              </div>
            </div>
          </div>
          </div>
      
       </>
  );
}


<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
      <div className='card'>
        hello
      </div>
    </div>
  </div>
</div>