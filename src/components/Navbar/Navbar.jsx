import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const Navbar = (user={ user }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // navigate to login page after successful sign out
                navigate('/');
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };
    return (
        <nav className="navbar">
            <div className="nav-link">
                <Link to="/addsong" className="link">Home</Link>
                <Link to="/myplaylist" className="last-link">Playlist</Link>
                {user && <button className="logout-button" onClick={handleSignOut}>Logout</button>}
            </div>
        </nav>
    )
};

export default Navbar;

