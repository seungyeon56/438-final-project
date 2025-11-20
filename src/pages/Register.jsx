import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Register.css';


const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/playlist");
    };

    return (
        <div className="register">
            <div className="name">CHIRO</div>

            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Create Account</h1>

                <div className="email-info">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="user-email"/>
                </div>

                <div className="password-info">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </div>

                <div className="confirm">
                    <label htmlFor="confirmation">Confirm Password</label>
                    <input type="password" id="confirmation"/>
                </div>

                <button type="submit" className="signup-button">
                    Sign Up
                </button>

                <div className="login-link">
                    Already a user? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;