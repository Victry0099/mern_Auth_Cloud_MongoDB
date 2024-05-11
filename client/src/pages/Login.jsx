import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const URL = "http://localhost:5000/api/auth/login"
const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // handling input value

  const { storeTokenInLs } = useAuth()
  const handleInput = (e) => {
    // console.log(e)
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,

    })
  }

  // submit form

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(user)

    try {
      const response = await fetch(URL, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });
      const res_data = await response.json();
      // console.log("res from server", res_data)
      console.log("login form", res_data);
      if (response.ok) {
        toast.success("login successful")
       
        // ?shared token from localstorage
        storeTokenInLs(res_data.token)
        setUser({
          email: "",
          password: "",
        })
        location.reload()
        navigate("/");
      }
      else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log("login page error", error)
    }
  }

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two--cols">
              <div className="login-image">
                <img src="/images/login.png" alt="no image" width="500" height="500" />

              </div>
              {/* l{login form} */}

              <div className="login-form">
                <h1 className='main-heading mb-3'>LogIn Form</h1>
                <br />
                <form onSubmit={handelSubmit}>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com" required autoComplete="off" value={user.email} onChange={handleInput} />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" required autoComplete="off" value={user.password} onChange={handleInput} />
                  </div>
                  <div className="login-div">
                    <button className="btn btn-submit">Log In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login
