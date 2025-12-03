import React, { useState, useEffect } from "react";
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';

const SearchSong = ({ query, user }) => {
    const [results, setResults] = useState([]);
    // state variable 'error' holds any error messages.
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {

        // asynchronous function to get data from the YouTube Data API
        const SearchSong = async () => {
            // Use a try...catch...finally block to handle the API request lifecycle
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&q=${encodeURIComponent(query)}&maxResults=5&key=AIzaSyA9sF2Mv7xn_w6_9l9k8OKIO0RVD6MawKY`)
                // Parse the JSON body from the successful response.
                const data = await response.json();
                console.log(data);
                setResults(data.items)
            } catch(err){
                setError(err.message);
            }
        };

        // call the function to initiate the data fetch.
        SearchSong();
    }, [query]);

    // async function to handle adding song to the playlist
    const handleAddSong = async (song) => {
        // Proceed only if both 'results' and the 'user' object are available.
        if (song && user) {
            try {
                const playlistRef = doc(db, 'users', user.uid, 'playlist', song.videoId);
                await setDoc(playlistRef, {
                    // Store the title of the video
                    title: song.title,
                    // Store the URL of the YouTube video
                    url: song.videoId,
                    // Store the thumbnail of the YouTube video
                    thumbnail: song.thumbnail,
                    createdAt: serverTimestamp(),
                });
                // notification for successful operation
                alert('Added Song!');
            } catch (err) {
                console.error("Error adding song", err);
                // generic error message
                alert('Failed to add song.');
            }
        }
    };

    if (error) return <p>Error: {error}</p>;

    // if the loading is complete, show search results
    return (
        <div className="fetch-song">
            {results.map(({ id, snippet }) => (
                <div className="song-card" key={id.videoId}>
                    {/* Render the video thumbnail and title */}
                    <img src={snippet.thumbnails.default.url} alt={snippet.title} className="album-cover" />
                    <p className="title">{snippet.title}</p>
                    {/* a button that calls the function 'handleAddSong' when clicked */}
                    <button className="add-button" onClick={() => handleAddSong({thumbnail: snippet.thumbnails.default.url, title: snippet.title, videoId: id.videoId})}>
                        Add to Playlist
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SearchSong;