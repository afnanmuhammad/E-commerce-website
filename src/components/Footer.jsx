import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
    return (
        <footer className="w-full bg-[#f8f8f8] font-['Montserrat']">
            {/* Top Footer Sections */}
            <div className="max-w-[1400px] mx-auto py-16 px-4 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Information */}
                    <div>
                        <h3 className="text-[14px] font-bold tracking-[0.1em] text-[#1a1a1a] uppercase mb-6">INFORMATION</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about-us" className="text-[13px] text-[#444] hover:text-black transition-colors">About Us</Link></li>
                            <li><Link to="/contact-us" className="text-[13px] text-[#444] hover:text-black transition-colors">Contact Us</Link></li>
                            <li><Link to="/faqs" className="text-[13px] text-[#444] hover:text-black transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy-policy" className="text-[13px] text-[#444] hover:text-black transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/careers" className="text-[13px] text-[#444] hover:text-black transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Quick Shop */}
                    <div>
                        <h3 className="text-[14px] font-bold tracking-[0.1em] text-[#1a1a1a] uppercase mb-6">QUICK SHOP</h3>
                        <ul className="space-y-3">
                            <li><Link to="/men" className="text-[13px] text-[#444] hover:text-black transition-colors">Men</Link></li>
                            <li><Link to="/women" className="text-[13px] text-[#444] hover:text-black transition-colors">Women</Link></li>
                        </ul>
                    </div>

                    {/* Customer Services */}
                    <div>
                        <h3 className="text-[14px] font-bold tracking-[0.1em] text-[#1a1a1a] uppercase mb-6">CUSTOMER SERVICES</h3>
                        <ul className="space-y-3">
                            <li><Link to="/terms-conditions" className="text-[13px] text-[#444] hover:text-black transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/shipping-delivery" className="text-[13px] text-[#444] hover:text-black transition-colors">Shipping & Delivery</Link></li>
                            <li><Link to="/track-order" className="text-[13px] text-[#444] hover:text-black transition-colors">Track your Order</Link></li>
                            <li><Link to="/returns-exchange" className="text-[13px] text-[#444] hover:text-black transition-colors">Returns & Exchange Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-[14px] font-bold tracking-[0.1em] text-[#1a1a1a] uppercase mb-6">NEWSLETTER SIGN UP</h3>
                        <p className="text-[13px] text-[#444] leading-relaxed mb-6">
                            Enter your email to receive daily news and a 5% off coupon for all items. If you haven't received the email, simply use the code 'Zane5' at checkout.
                        </p>
                        <div className="flex w-full mb-6">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-white border-none py-3 px-4 text-[13px] focus:ring-1 focus:ring-black outline-none"
                            />
                            <button className="bg-[#1a1a1a] text-white px-4 flex items-center justify-center hover:bg-black transition-colors">
                                <HiOutlineMail size={20} />
                            </button>
                        </div>
                        <div className="flex gap-5">
                            <a href="#" className="text-[#1a1a1a] hover:opacity-70 transition-opacity"><FaFacebookF size={18} /></a>
                            <a href="#" className="text-[#1a1a1a] hover:opacity-70 transition-opacity"><FaInstagram size={18} /></a>
                            <a href="#" className="text-[#1a1a1a] hover:opacity-70 transition-opacity"><FaWhatsapp size={18} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#eeeeee] py-4 px-4 md:px-12">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[12px] md:text-[13px] text-[#666]">
                        Copyright © 2025 Zane. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        {/* Visa Icon Placeholder */}
                        <div className="bg-white px-2 py-0.5 rounded border border-gray-200">
                            <span className="text-[10px] font-bold text-[#1a1f71] italic">VISA</span>
                        </div>
                        {/* Mastercard Icon Placeholder */}
                        <div className="bg-white px-2 py-0.5 rounded border border-gray-200 flex items-center gap-0.5">
                            <div className="w-2.5 h-2.5 bg-[#eb001b] rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-[#f79e1b] rounded-full -ml-1.5 opacity-80"></div>
                            <span className="text-[10px] font-medium text-black">mastercard</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
