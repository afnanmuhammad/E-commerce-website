import React from "react";
import Footer from "../components/Footer";

const Careers = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-6 text-center uppercase tracking-wide">
                    Careers at Zane
                </h1>
                <p className="text-center text-[#666] max-w-2xl mx-auto mb-12">
                    Join our team and be a part of the fastest-growing fashion brand in Pakistan. We are always looking for creative, passionate, and driven individuals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Job 1 */}
                    <div className="border border-gray-200 bg-white p-6 rounded-md hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[18px] font-bold text-[#1a1a1a] uppercase">Fashion Designer</h3>
                            <span className="bg-gray-100 text-[11px] font-bold px-2 py-1 rounded">KARACHI</span>
                        </div>
                        <p className="text-[14px] text-[#666] mb-4">
                            We are seeking a creative Fashion Designer with a strong portfolio in contemporary wear.
                        </p>
                        <button className="text-[12px] font-bold uppercase text-black border-b border-black pb-0.5 hover:opacity-70">
                            Apply Now
                        </button>
                    </div>

                    {/* Job 2 */}
                    <div className="border border-gray-200 bg-white p-6 rounded-md hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[18px] font-bold text-[#1a1a1a] uppercase">Social Media Manager</h3>
                            <span className="bg-gray-100 text-[11px] font-bold px-2 py-1 rounded">REMOTE / HYBRID</span>
                        </div>
                        <p className="text-[14px] text-[#666] mb-4">
                            Manage our digital presence and engage with our growing community across all platforms.
                        </p>
                        <button className="text-[12px] font-bold uppercase text-black border-b border-black pb-0.5 hover:opacity-70">
                            Apply Now
                        </button>
                    </div>

                    {/* Job 3 */}
                    <div className="border border-gray-200 bg-white p-6 rounded-md hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[18px] font-bold text-[#1a1a1a] uppercase">Customer Success Lead</h3>
                            <span className="bg-gray-100 text-[11px] font-bold px-2 py-1 rounded">KARACHI</span>
                        </div>
                        <p className="text-[14px] text-[#666] mb-4">
                            Ensure our customers receive the premium experience they deserve.
                        </p>
                        <button className="text-[12px] font-bold uppercase text-black border-b border-black pb-0.5 hover:opacity-70">
                            Apply Now
                        </button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[14px] text-[#666]">
                        Don't see a position that fits? Send your CV to <strong className="text-black">careers@wearzane.com</strong>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Careers;
