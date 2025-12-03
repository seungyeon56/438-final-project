import React from 'react';
import { Link } from "react-router-dom";
import './Register.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Register = () => {
    const [email, setEmail] = useState('');
    // Create a state variable 'password' to hold the password input value, and a function 'setPassword' to update it.
    const [password, setPassword] = useState('');
    // Create a state variable 'error' to hold any authentication error messages.
    const [error, setError] = useState('');

    // Define an asynchronous function to handle the user sign-up process.
    const handleSignUp = async (e) => {
        // Prevent the default form submission behavior, which reloads the page.
        e.preventDefault();
        // Start a try...catch block to handle potential errors from Firebase.
        try {
            // Attempt to create a new user with the provided email and password.
            await createUserWithEmailAndPassword(auth, email, password);
            // If an error occurs during sign-up...
        } catch (err) {
            // ...update the 'error' state with the error message.
            setError(err.message);
            console.log(error);
        }
    };

    return (
        <div className="register">
            <form className="signup-form">
                <h1>Create Account</h1>

                {/* Email input field. */}
                <div className="email-info">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="user-email" value={email}
                        // Updates the 'password' state whenever the user types in the input.
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                {/* Password input field. */}
                <div className="password-info">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password}
                        // Updates the 'password' state whenever the user types in the input.
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>

                {/* A button to trigger the sign-up function. */}
                <button onClick={handleSignUp} type="submit" className="signup-button">
                    Sign Up
                </button>

                <div className="login-link">
                    Already a user? <Link to="/">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;