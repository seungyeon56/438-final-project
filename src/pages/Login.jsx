import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/playlist");
    };

    return (
        <div className="login">
            <div className="name">CHIRO</div>

            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="login-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="user-email"/>
                </div>

                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="user-password"/>
                </div>

                <button type="submit" className="login-button">
                    Login
                </button>

                <div className="register-link">
                    Don't have an account? <Link to="/register">Sign up</Link>
                </div>

            </form>
        </div>
    );
};

export default Login;