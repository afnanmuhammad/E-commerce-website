import React from "react";
import Footer from "../components/Footer";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const ContactUs = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-12 text-center uppercase tracking-wide">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-4 uppercase">Get in touch</h2>
                            <p className="text-[15px] text-[#666] mb-6">
                                We'd love to hear from you. Whether you have a question about our products, orders, or just want to say hello, our team is ready to assist you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white p-2 rounded-full mt-1">
                                    <HiOutlinePhone size={18} />
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold uppercase">Phone</h3>
                                    <p className="text-[15px] text-[#444]">0333 227 9263 (ZANE)</p>
                                    <p className="text-[13px] text-[#888]">Mon-Fri 9am-6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white p-2 rounded-full mt-1">
                                    <HiOutlineMail size={18} />
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold uppercase">Email</h3>
                                    <p className="text-[15px] text-[#444]">ask@wearzane.com</p>
                                    <p className="text-[13px] text-[#888]">Online support 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-black text-white p-2 rounded-full mt-1">
                                    <HiOutlineLocationMarker size={18} />
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold uppercase">Headquarters</h3>
                                    <p className="text-[15px] text-[#444]">
                                        123 Fashion Avenue,<br />
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-lg">
                        <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-6 uppercase">Send us a message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[13px] font-bold uppercase mb-2">Name</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black" placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold uppercase mb-2">Email</label>
                                    <input type="email" className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-black" placeholder="Your email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold uppercase mb-2">Message</label>
                                <textarea className="w-full p-3 border border-gray-300 rounded-sm h-32 resize-none focus:outline-none focus:border-black" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-3.5 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;
