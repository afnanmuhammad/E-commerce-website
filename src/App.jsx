import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cards from './components/Cards'
import Clearance from './pages/Clearance'
import NewArrivals from './pages/NewArrivals'
import Women from './pages/Women'
import Men from './pages/Men'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clearance/*" element={<Clearance />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/women/*" element={<Women />} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App