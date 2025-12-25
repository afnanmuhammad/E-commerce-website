import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Clearance from './pages/Clearance'
import NewArrivals from './pages/NewArrivals'
import Women from './pages/Women'
import Men from './pages/Men'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

//  IMPORT AUTH PAGES
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'

const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                {/* AUTH ROUTES */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

                {/* MAIN ROUTES */}
                <Route path="/" element={<Home />} />
                <Route path="/new-arrivals" element={<NewArrivals />} />
                <Route path="/clearance/*" element={<Clearance />} />
                <Route path="/women/*" element={<Women />} />
                <Route path="/men/*" element={<Men />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />

                {/* FALLBACK */}
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
