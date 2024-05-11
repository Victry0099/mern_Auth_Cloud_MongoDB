

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    // You can console.log(isLoggedIn) here to check if it updates correctly
  }, [isLoggedIn]);




  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <NavLink to="/">BldVictry</NavLink>
          </div>

          <div className="right">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                {(isLoggedIn && user.isAdmin) ? (
                  <>
                    <li>
                      <NavLink to="/admin">Admin</NavLink>
                    </li>
                    <li>
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  </>
                ) : isLoggedIn ? (
                  <>
                    <li>
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;





