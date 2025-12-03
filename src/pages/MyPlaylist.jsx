import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import { db } from '../firebase/config';
import { doc, collection, query, orderBy, getDocs, deleteDoc } from 'firebase/firestore'; // Firestore functions to build and run queries
import music from  '../assets/music.svg';
import './MyPlaylist.css';

const MyPlaylist = ({ user }) => {
    const [songs, setSongs] = useState([]); // State to hold added songs
    const [loading, setLoading] = useState(true); // State to indicate loading status

    useEffect(() => {
        // Async function to load added songs from Firebase
        const fetchAddedSongs = async () => {
            if (user) { // only fetch if a user is provided
                try {
                    // reference to user's added song subcollection
                    const addedCol = collection(db, 'users', user.uid, 'playlist');
                    // Create a query ordering added songs by createdAt descending
                    const q = query(addedCol, orderBy('createdAt', 'desc'));
                    // get a snapshot
                    const querySnapshot = await getDocs(q);
                    const userFavorites = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    // update state with added songs fetched from Firebase
                    setSongs(userFavorites);
                } catch (error) {
                    // log any errors during fetch
                    console.error("Error fetching songs from the database", error);
                    // clear loading flag
                } finally {
                    setLoading(false);
                }

            } else {
                // If no user, ensure loading is false
                setLoading(false);
            }
        };
        // call the fetch function
        fetchAddedSongs();
    }, [user]);

    // async function to allow users to delete song from the playlist
    const handleDeleteSong = async (songId) => {
        if (user) {
            try {
                await deleteDoc(doc(db, 'users', user.uid, 'playlist', songId));
                // deleting song based the songId or the video id at the end of url
                setSongs(prevSongs => prevSongs.filter(song => song.id !== songId));
            } catch (error) {
                console.error("Error deleting song:", error);
            }
        }
    };

    if (loading) return <p>Loading favorites...</p>;

    // render playlist
    return (
        <div className="Playlist">
            <Navbar user={user} />
            <h1 className="playlist-header">
                My Playlist
                {/* Show music note icon next to heading */}
                <img src={music} alt="music note" />
            </h1>

            {songs.length > 0 ? (
                <div className="songs-container">
                    {songs.map((song) => (
                        <div className="album" key={song.id}>
                            {/* use iframe tag to make videos playable */}
                            <iframe className="Youtube" src={`https://www.youtube.com/embed/${song.url}`}
                                    title={song.title}
                                    allow="autoplay; encrypted-media"/>
                            <p className="title">{song.title}</p>
                            {/* A button that calls the 'handleDeleteSong' function when clicked */}
                            <button className="delete-button" onClick={() => handleDeleteSong(song.id)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>

            ) : (
                // Shown when the user has no song in their playlist yet
                <p>No songs added yet.</p>
            )}
        </div>
    );
};

export default MyPlaylist;