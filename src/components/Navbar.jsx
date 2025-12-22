import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/75logo.png'
import { MdOutlineManageAccounts } from "react-icons/md";


const Navbar = () => {

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'CLEARANCE', path: '/clearance' },
        { name: 'NEW ARRIVALS', path: '/new-arrivals' },
        { name: 'WOMEN', path: '/women' },
        { name: 'MEN', path: '/men' },
    ]





    return (
        <header className='absolute z-10 flex w-full justify-between items-center px-4'>

            {/* logo section */}
            <div>
                <img src={logo} alt="logo" className='rounded-[50%] h-15 w-30 mt-2' />
            </div>

            {/* links section */}
            <nav className="hidden md:flex space-x-8 text-white font-semibold text-lg">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="relative group"
                    >
                        <span>{link.name}</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </nav>

            {/* <nav className='flex text-white space-x-4 font-semibold gap-6 text-2xl'>
                <Link to="/">Home</Link>
                <Link to="/clearance">Clearance</Link>
                <Link to="/new-arrivals">New Arrivals</Link>
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
            </nav> */}

            {/* search and logout section */}
            <div className="hidden md:flex space-x-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="p-2 rounded-md border-b-2 focus:border-gray-300 text-white focus:outline-hidden bg-transparent"
                />
                <button className=" text-white rounded-md px-4 py-2">
                    <MdOutlineManageAccounts size={30} />
                </button>
            </div>
        </header>
    )
}

export default Navbar