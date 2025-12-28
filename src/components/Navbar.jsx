import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/75logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from "react-icons/hi";
import CartModal from "./CartModal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [openMenu, setOpenMenu] = useState(null);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // track scroll

  const menuRef = useRef(null);

  const womenCategories = [
    ["NEW ARRIVALS", "DRESSES", "JACKETS"],
    ["TOPS", "PANTS", "SWEATSHIRTS & HOODIES"],
    ["T-SHIRTS", "SKIRTS", "SWEATERS"],
    ["SHIRTS", "CO ORD SETS"],
  ];

  const menCategories = [
    ["NEW ARRIVALS", "TANK TOPS", "BOTTOMS", "SWEATER"],
    ["POLO SHIRTS", "CO ORD SETS", "SWEATSHIRTS & HOODIES"],
    ["TSHIRTS", "SHIRTS", "JACKETS"],
  ];

  const clearanceCategories = [["SEASONAL SALE", "CLEARANCE", "LAST CHANCE"]];

  const links = [
    { name: "HOME", path: "/" },
    { name: "NEW ARRIVALS", path: "/new-arrivals" },
    {
      name: "WOMEN",
      path: "/women",
      hasDropdown: true,
      categories: womenCategories,
    },
    { name: "MEN", path: "/men", hasDropdown: true, categories: menCategories },
    {
      name: "CLEARANCE",
      path: "/clearance",
      hasDropdown: true,
      categories: clearanceCategories,
    },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
        setOpenUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenMenu(null);
    setOpenUserMenu(false);
    setIsCartOpen(false);
  }, [location.pathname]);

  return (
    <>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* FIXED NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 transition-all duration-300 ${
          scrollY > 200 || !isHomePage || openMenu
            ? "bg-white border-b border-gray-100 text-[#1a1a1a]"
            : "bg-transparent text-white"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="rounded-full h-12 w-24 md:h-14 md:w-28 object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <nav
          ref={menuRef}
          className={`hidden lg:flex space-x-10 font-bold text-[13px] tracking-widest`}
        >
          {links.map((link) => (
            <div
              key={link.name}
              className="relative py-2"
              onMouseEnter={() => link.hasDropdown && setOpenMenu(link.name)}
            >
              {link.hasDropdown ? (
                <NavLink
                  to={link.path}
                  className="flex items-center gap-1 uppercase"
                >
                  {link.name}
                  <MdKeyboardArrowDown
                    className={`text-xl transition-transform ${
                      openMenu === link.name ? "rotate-180" : ""
                    }`}
                  />
                </NavLink>
              ) : (
                <NavLink to={link.path} className="uppercase">
                  {link.name}
                </NavLink>
              )}

              {/* MEGA MENU */}
              {link.hasDropdown && openMenu === link.name && (
                <div
                  onMouseEnter={() => setOpenMenu(link.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="fixed left-0 top-[70px] w-full bg-white/80 backdrop-blur-md py-14 px-10 shadow-2xl z-50"
                >
                  <div
                    className={`max-w-7xl mx-auto grid ${
                      link.categories.length === 4
                        ? "grid-cols-4"
                        : "grid-cols-3"
                    } gap-12`}
                  >
                    {link.categories.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col space-y-6">
                        {column.map((item) => (
                          <Link
                            key={item}
                            to={`/${link.name.toLowerCase()}/${item
                              .toLowerCase()
                              .replace(/ & /g, "-")
                              .replace(/ /g, "-")}`}
                            className="text-[14px] font-bold uppercase tracking-[0.12em] hover:opacity-60"
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

        {/* RIGHT SIDE */}
        <div className={`hidden md:flex items-center gap-6`}>
          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="p-2 w-48 border-b bg-transparent focus:w-64 transition-all focus:outline-none"
            />
            <HiOutlineSearch
              size={20}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* USER MENU */}
          <div
            className="relative"
            onMouseEnter={() => setOpenUserMenu(true)}
            onMouseLeave={() => setOpenUserMenu(false)}
          >
            <button className="hover:scale-110 transition-transform">
              <HiOutlineUser size={26} />
            </button>

            {openUserMenu && (
              <div className="absolute right-0 top-6 mt-2 w-40 bg-white/80 text-black shadow-xl rounded-md py-2 text-sm z-50">
                <div
                  onMouseDown={() => navigate("/login")}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Login
                </div>
                <div
                  onMouseDown={() => navigate("/signup")}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Sign Up
                </div>
              </div>
            )}
          </div>

          {/* CART */}
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <HiOutlineShoppingCart size={26} />
            <span className="absolute -top-1.5 -right-2 bg-black text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
              11
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
