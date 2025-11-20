import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import './AddSong.css';
import {useNavigate} from "react-router-dom";

const AddSong = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/finalplaylist");
    };

    return (
        <div className="add-song">
            <Navbar/>

            <form className="search-bar">
                <div className="search-song">
                    <input type="text" id="song" placeholder="Song title"/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>

            <div className="content">
                <div className="results">
                    <div className="result-container">
                        <h3>Search Result</h3>
                        <div className="album-cover">
                            <img src="https://placehold.co/200x200" alt="album placeholder"/>
                        </div>

                        <div className="add-feature1">
                            <button type="submit" className="add-to-my-playlist" onClick={handleSubmit}>Add to My Playlist</button>
                        </div>

                        <div className="add-feature2">
                            <button type="submit" className="add-to-collab-playlist" onClick={handleSubmit}>Add to Collaborative Playlist</button>
                        </div>
                    </div>
                </div>

                <div className="all-playlist">
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
            </div>
        </div>
    )
};

export default AddSong;