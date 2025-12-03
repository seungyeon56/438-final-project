import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import './AddSong.css';
import SearchSong from "../components/SearchSong/SearchSong.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';

const AddSong = () => {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        // authentication state change
        const userStatus = onAuthStateChanged(auth, (user) => {
            setUser(user); // updates the state once user is actually logged in
        });
        return () => userStatus();
    }, []);

    // track logged-in user
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="add-song">
            <h2>Study & Work Playlist</h2>
            <Navbar/>
            {/* create a search bar */}
            <form className="search-bar" onSubmit={handleSubmit}>
                <div className="search-song">
                    <input type="text" id="song" placeholder="Song title" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>

            <div className="results">
                <h3>Search Result</h3>

                {/* Render SearchSong function to show search results */}
                {query && <SearchSong query={query} user={user} />}
            </div>
        </div>
    );
};

export default AddSong;