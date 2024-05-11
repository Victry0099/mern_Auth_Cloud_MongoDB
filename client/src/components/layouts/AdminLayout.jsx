import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";
import { useAuth } from '../../store/auth';
const AdminLayout = () => {
    const { user,isLoading } = useAuth();
    console.log("admin layout", user);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if(!user.isAdmin){
       return <Navigate to="/" />
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"><FaUser /> users</NavLink>

                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><IoMdContact /> Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services"><RiServiceFill /> services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><FaHome /> Home</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default AdminLayout
