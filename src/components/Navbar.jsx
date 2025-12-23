import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/75logo.png'
import { MdOutlineManageAccounts } from "react-icons/md";

const Navbar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'CLEARANCE', path: '/clearance' },
        { name: 'NEW ARRIVALS', path: '/new-arrivals' },
        { name: 'WOMEN', path: '/women' },
        { name: 'MEN', path: '/men' },
    ]

    return (
        <header className={`${isHomePage ? 'absolute' : 'relative bg-white border-b border-gray-100'} z-50 flex w-full justify-between items-center px-4 py-2`}>
            {/* logo section */}
            <Link to="/" className="flex items-center">
                <img src={logo} alt="logo" className='rounded-full h-12 w-24 md:h-14 md:w-28 object-contain' />
            </Link>

            {/* links section */}
            <nav className={`hidden lg:flex space-x-10 ${isHomePage ? 'text-white' : 'text-[#1a1a1a]'} font-bold text-[13px] tracking-widest`}>
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) => `
                            relative py-2 transition-colors hover:text-black/70
                            ${isActive ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current' : ''}
                        `}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>

            {/* search and account section */}
            <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'text-white' : 'text-[#1a1a1a]'}`}>
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className={`p-2 w-48 rounded-md border-b bg-transparent transition-all focus:w-64 focus:outline-none placeholder:text-inherit/50 border-current/20 focus:border-current`}
                    />
                </div>
                <button className="hover:opacity-70 transition-opacity">
                    <MdOutlineManageAccounts size={28} />
                </button>
            </div>
        </header>
    )
}

export default Navbar