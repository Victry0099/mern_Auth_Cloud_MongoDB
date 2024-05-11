import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <section id="error-page" className="page-not-found">
                <div className="content">
                    <h1 className="header">404</h1>
                    <h3>Sorry! Page not found</h3>
                    <p>Oops! It seems like the page you're trying to access doesn't exist. If you belive there's an issue, fee free to report it, and we'll look into it</p>

                    <div className="btns">
                        <NavLink to="/" className="btn">return home</NavLink>
                        <NavLink to="/contact" className="btn">report problem</NavLink>
            
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error




