import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase/config';
import './Login.css';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    // Create a state variable 'password' to hold the password input value, and a function 'setPassword' to update it.
    const [password, setPassword] = useState('');
    // Create a state variable 'error' to hold any authentication error messages.
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        // Prevent the default form submission behavior, which reloads the page.
        e.preventDefault();
        // Start a try...catch block to handle potential errors from Firebase.
        try {
            // Attempt to create a new user with the provided email and password.
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/addsong');
            // If an error occurs during sign-up...
        } catch (err) {
            // ...update the 'error' state with the error message.
            setError(err.message);
            console.log(error);
        }
    };

    return (
        <div className="login">
            <form className="login-form">
                <h1>Login</h1>
                <div className="login-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="user-email" value={email}
                        // Updates the 'password' state whenever the user types in the input.
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="password-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="user-password" value={password}
                        // Updates the 'password' state whenever the user types in the input.
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                {/* A button to trigger the sign-in function. */}
                <button type="submit" onClick={handleSignIn} className="login-button">
                    Login
                </button>
            </form>

            <div className="register-link">
                Don't have an account? <Link to="/register">Sign up</Link>
            </div>
        </div>
    );
};

export default Login;