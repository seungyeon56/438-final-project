import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <div className="nav-link">
            <Link to="/finalplaylist" className="link">Home</Link>
            <Link to="/collabplaylist" className="link">Collab Playlist</Link>
            <Link to="/login" className="last-link">Logout</Link>
        </div>
    </nav>
);

export default Navbar;

