// import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Playlist from './pages/Playlist.jsx'
import AddSong from './pages/AddSong.jsx'
import FinalPlaylist from './pages/FinalPlaylist.jsx'
import CollabPlaylist from './pages/CollabPlaylist.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/addsong" element={<AddSong />} />
            <Route path="/finalplaylist" element={<FinalPlaylist />} />
            <Route path="/collabplaylist" element={<CollabPlaylist />} />
        </Routes>
    </>
  )
}

export default App;