import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    })
    const params = useParams();
    console.log("params single user", params)
    const { authorizationToken } = useAuth();

    // get Single user data
    const singleUserURL = `http://localhost:5000/api/admin/users/${params.id}`;
    const getSingleUserData = async () => {
        try {
            const response = await fetch(singleUserURL, {

                method: "GET",

                headers: {
                    Authorization: authorizationToken,
                },
            })
            const data = await response.json();
            console.log(`user single data ${data}`);
            setData(data);
            // if (response.ok) {
            //     getAllUsers();
            // }
        } catch (error) {
            console.log(error)

        }
    };


    useEffect(() => {
        getSingleUserData();
    }, [])
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    }
    const updateURL =`http://localhost:5000/api/admin/users/update/${params.id}`
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(updateURL, {

                method: "PATCH",

                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Update Successfully");
            }else{
                toast.error("Not Update Successfully");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two--cols">

                            <div className="login-form">
                                <h1 className='main-heading mb-3'>Update User Data</h1>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" id="username" placeholder="Enter your name" required autoComplete="off" value={data.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" placeholder="abc@gmail.com" required autoComplete="off" value={data.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Mobile</label>
                                        <input type="number" name="phone" id="phone" placeholder="Enter your number" required autoComplete="off" value={data.phone} onChange={handleInput} />
                                    </div>
                                    <div className="con-btn">
                                        <button className="btn btn-submit" type="submit">Update</button>
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

export default AdminUpdate
