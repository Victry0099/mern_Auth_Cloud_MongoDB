import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const URL = "http://localhost:5000/api/auth/register"
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  // handling input value
  const {storeTokenInLs} = useAuth();

  const handleInput = (e) => {
    console.log(e)
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

        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      console.log("res from server",res_data.extraDetails)
      if (response.ok) {
        
        // ?shared token from localstorage
        storeTokenInLs(res_data.token)
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        // alert("not valid registration")
      }
      console.log(response);
    } catch (error) {
      console.log("register",error)
    }

  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two--cols">
              <div className="registration-image">
                <img src="/images/reg_logo.png" alt="no image" width="500" height="500" />

              </div>
              {/* l{registration form} */}

              <div className="registration-form">
                <h1 className='main-heading mb-3'>Regstration Form</h1>
                <br />
                <form onSubmit={handelSubmit}>
                  <div>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" id="username" placeholder="Enter Name" required autoComplete="off" value={user.username}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com" required autoComplete="off" value={user.email} onChange={handleInput} />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name="phone" id="phone" placeholder="Enter phone number" required autoComplete="off" value={user.phone} onChange={handleInput} />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" required autoComplete="off" value={user.password} onChange={handleInput} />
                  </div >
                  <div className="reg-btn">
                    <button className="btn btn-submit">Register Now</button>
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

export default Register
