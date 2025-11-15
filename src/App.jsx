// import { useState } from 'react'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
