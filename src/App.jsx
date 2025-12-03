import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AddSong from './pages/AddSong.jsx'
import SearchSong from './components/SearchSong/SearchSong.jsx'
import MyPlaylist from './pages/MyPlaylist.jsx'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './firebase/config';

function App() {
    const [user, setUser] = useState(null); // State to hold current authenticated user (null = no user)
    const navigate = useNavigate();  // Hook to imperatively navigate between routes

    useEffect(() => {
        // Subscribe to Firebase auth state changes; callback receives the current user or null
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Update local state with the current user (or null)
            // this prevents just going straight to login page and accidentally skipping sign-up page
            if (!currentUser && !window.location.pathname.startsWith('/') && !window.location.pathname.startsWith('/register')) {
                navigate('/');
            }
        });
        return () => unsubscribe(); // Cleanup: unsubscribe from auth listener when component unmounts or deps change
    }, [navigate]); // Re-run effect only if navigate function identity changes

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addsong" element={<AddSong />} />
            <Route path="/searchsong" element={<SearchSong />} />
            <Route path="/myplaylist" element={<MyPlaylist user={user} />} />
            {/* MyPlaylist route - show MyPlaylist when authenticated, otherwise show Home */}
            <Route path="/myplaylist" element={user ? <MyPlaylist user={user} /> : <Login />} />
        </Routes>
    </>
  )
}

export default App;