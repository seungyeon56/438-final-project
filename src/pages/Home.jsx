import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => (
    <div className="Home">
        <h1 className="title">CHIRO</h1>
        <h2 className="subtitle">Collaborative Playlist</h2>

        <div className="buttons">
            <Link to="/login">
                <button>Login</button>
            </Link>
            <Link to="/register">
                <button>Sign Up</button>
            </Link>
        </div>
    </div>
)

export default Home;