import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import './CollabPlaylist.css';
import playbutton from '../assets/playbutton.svg';
import addfriends from '../assets/addfriends.svg';

const CollabPlaylist = () => (
    <div className="collabPlaylist">
        <Navbar />

        <h2>Collaborative Playlist</h2>

        <div className="main-buttons">
            <button className="play-button">
                <img src={playbutton} alt="playbutton" />
                Play
            </button>

            <button className="invite-button">
                <img src={addfriends} alt="add friends button" />
                Invite Friends
            </button>
        </div>

        <div className="song-list">
            <div className="album">
                <img src="https://placehold.co/130x130" alt="album placeholder" />
                <div className="description">
                    <p id="title">Song Name</p>
                    <p>Artist</p>
                </div>
            </div>

            <div className="album">
                <img src="https://placehold.co/130x130" alt="album placeholder" />
                <div className="description">
                    <p id="title">Song Name</p>
                    <p>Artist</p>
                </div>
            </div>

            <div className="album">
                <img src="https://placehold.co/130x130" alt="album placeholder" />
                <div className="description">
                    <p id="title">Song Name</p>
                    <p>Artist</p>
                </div>
            </div>

            <div className="album">
                <img src="https://placehold.co/130x130" alt="album placeholder" />
                <div className="description">
                    <p id="title">Song Name</p>
                    <p>Artist</p>
                </div>
            </div>
        </div>
    </div>
);

export default CollabPlaylist;