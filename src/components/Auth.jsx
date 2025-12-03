import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        // Prevent the default form submission behavior, which reloads the page.
        e.preventDefault();
        // Attempt to sign in the user with the provided email and password.
        try {
            // Attempt to create a new user with the provided email and password.
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    // asynchronous function to handle the user sign-in process.
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            // Attempt to sign in the user with the provided email and password.
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            // ...update the 'error' state with the error message.
            setError(err.message);
        }
    };

    return (
        <div>
            {/* A heading for the form. */}
            <h2>Sign Up / Login</h2>
            <form>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                {/* A button to trigger the sign-up function. */}
                <button onClick={handleSignUp}>Sign Up</button>

                {/* A button to trigger the sign-in function. */}
                <button onClick={handleSignIn}>Sign In</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Auth;