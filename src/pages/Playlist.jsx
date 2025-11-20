import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { useNavigate } from 'react-router-dom';
import './Playlist.css';

const Playlist = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/addsong");
    };

    return (
        <div className="playlist">
            <Navbar/>
            <form className="search-bar">
                <div className="search-song">
                    <input type="text" id="song" placeholder="Search..."/>
                    <button type="submit" className="search-button" onClick={handleSubmit}>Search</button>
                </div>
            </form>

            <div className="collab-playlist">
                <div className="collab-header">
                    <h3>Collaborative Playlist</h3>
                    <button className="invite-button">Invite Friends</button>
                </div>

                <div className="collab-playlist-container">
                    <p>0 video</p>
                </div>
            </div>

            <div className="my-playlist">
                <h3>My Playlist</h3>
                <div className="my-playlist-container">
                    <p>0 video</p>
                </div>
            </div>
        </div>
    );
};

export default Playlist;
