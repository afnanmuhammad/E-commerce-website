import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/75logo.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUser, HiOutlineShoppingCart, HiOutlineSearch } from 'react-icons/hi'
import CartModal from './CartModal'

const Navbar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
    const [openMenu, setOpenMenu] = useState(null)
    const menuRef = useRef(null)

    const womenCategories = [
        ['NEW ARRIVALS', 'DRESSES', 'JACKETS'],
        ['TOPS', 'PANTS', 'SWEATSHIRTS & HOODIES'],
        ['T-SHIRTS', 'SKIRTS', 'SWEATERS'],
        ['SHIRTS', 'CO ORD SETS']
    ]

    const menCategories = [
        ['NEW ARRIVALS', 'TANK TOPS', 'BOTTOMS', 'SWEATER'],
        ['POLO SHIRTS', 'CO ORD SETS', 'SWEATSHIRTS & HOODIES'],
        ['TSHIRTS', 'SHIRTS', 'JACKETS']
    ]

    const clearanceCategories = [
        ['SEASONAL SALE', 'CLEARANCE', 'LAST CHANCE']
    ]

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'NEW ARRIVALS', path: '/new-arrivals' },
        { name: 'WOMEN', path: '/women', hasDropdown: true, categories: womenCategories },
        { name: 'MEN', path: '/men', hasDropdown: true, categories: menCategories },
        { name: 'CLEARANCE', path: '/clearance', hasDropdown: true, categories: clearanceCategories },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const [isCartOpen, setIsCartOpen] = useState(false)

    // Close menu on route change
    useEffect(() => {
        setOpenMenu(null)
        setIsCartOpen(false)
    }, [location.pathname])

    return (
        <>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            <header className={`${isHomePage && !openMenu ? 'absolute' : 'relative bg-white border-b border-gray-100'} z-50 flex w-full justify-between items-center px-4 py-2 transition-all duration-300`}>
                {/* logo section */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className='rounded-full h-12 w-24 md:h-14 md:w-28 object-contain' />
                </Link>

                {/* links section */}
                <nav ref={menuRef} className={`hidden lg:flex space-x-10 ${isHomePage && !openMenu ? 'text-white' : 'text-[#1a1a1a]'} font-bold text-[13px] tracking-widest relative`}>
                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="relative py-2 group"
                            onMouseEnter={() => link.hasDropdown && setOpenMenu(link.name)}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            {link.hasDropdown ? (
                                <NavLink
                                    to={link.path}
                                    onClick={() => setOpenMenu(openMenu === link.name ? null : link.name)}
                                    className={({ isActive }) => `flex items-center gap-1 transition-colors hover:text-black/70 cursor-pointer uppercase ${openMenu === link.name || isActive ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current' : ''}`}
                                >
                                    {link.name}
                                    <MdKeyboardArrowDown className={`text-xl transition-transform duration-300 ${openMenu === link.name ? 'rotate-180' : ''}`} />
                                </NavLink>
                            ) : (
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => `
                                        relative transition-colors hover:text-gray-200
                                        ${isActive ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-current' : ''}
                                    `}
                                >
                                    {link.name}
                                </NavLink>
                            )}

                            {/* Mega Menu */}
                            {link.hasDropdown && link.categories && openMenu === link.name && (
                                <div className="fixed left-0 top-[60px] md:top-[70px] w-full bg-white/70 backdrop-brightness-150  text-blac py-14 px-10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                                    <div className={`max-w-7xl mx-auto grid ${link.categories.length === 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-12`}>
                                        {link.categories.map((column, colIdx) => (
                                            <div key={colIdx} className="flex flex-col space-y-7">
                                                {column.map((item) => (
                                                    <Link
                                                        key={item}
                                                        to={`/${link.name.toLowerCase()}/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                                        className="text-[14px] font-bold hover:opacity-60 transition-opacity tracking-[0.1em] uppercase"
                                                    >
                                                        {item}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* search and account section */}
                <div className={`hidden md:flex items-center gap-6 ${isHomePage && !openMenu ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search here"
                            className={`p-2 w-48 rounded-md border-b-[1.5px] bg-transparent transition-all focus:w-64 focus:outline-none placeholder:text-white focus:border-current`}
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 hover:opacity-70">
                            <HiOutlineSearch size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hover:scale-110 transition-transform">
                            <HiOutlineUser size={26} strokeWidth={1.5} />
                        </button>

                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative hover:scale-110 transition-transform"
                        >
                            <HiOutlineShoppingCart size={26} strokeWidth={1.5} />
                            <span className="absolute -top-1.5 -right-2 bg-black text-white text-[10px] font-medium h-4 w-4 flex items-center justify-center rounded-full">
                                11
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar