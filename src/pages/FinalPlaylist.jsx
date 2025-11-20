import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import {useNavigate} from "react-router-dom";
import './FinalPlaylist.css';

const FinalPlaylist = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/collabplaylist");
    };

    return (
        <div className="final-playlist">
            <Navbar/>
            <form className="search-bar">
                <div className="search-song">
                    <input type="text" id="song" placeholder="Search..."/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>

            <div className="collab-playlist">
                <div className="collab-header">
                    <h3>Collaborative Playlist</h3>
                    <button className="invite-button">Invite Friends</button>
                </div>

                <div className="collab-playlist-container">
                    <img src="https://placehold.co/130x130" alt="album placeholder"/>
                    <div className="description">
                        <p>Song Name</p>
                        <p>Artist</p>
                        <a href="#" className="view-more" onClick={handleSubmit}> View more +</a>
                    </div>
                </div>
            </div>

            <div className="my-playlist">
                <h3>My Playlist</h3>
                <div className="my-playlist-container">
                    <img src="https://placehold.co/130x130" alt="album placeholder"/>
                    <div className="description">
                        <p>Song Name</p>
                        <p>Artist</p>
                        <a href="#" className="view-more" onClick={handleSubmit}> View more +</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FinalPlaylist;
