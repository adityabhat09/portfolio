import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import Service from './pages/Service';
import Navbar from './pages/components/Navbar';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Route to Landing Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  )
}

export default App
