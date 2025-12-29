import React, { useState } from "react";
import Footer from "../components/Footer";

const TrackOrder = () => {
    const [orderId, setOrderId] = useState("");
    const [status, setStatus] = useState(null);

    const handleTrack = (e) => {
        e.preventDefault();
        // Simulate tracking logic
        if (orderId) {
            setStatus("Processing"); // Dummy status
        }
    };

    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[800px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-2 text-center uppercase tracking-wide">
                    Track Your Order
                </h1>
                <p className="text-center text-[#666] mb-12">Enter your order ID to check the status of your shipment.</p>

                <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-md shadow-sm max-w-[600px] mx-auto">
                    <form onSubmit={handleTrack} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-[13px] font-bold uppercase mb-2">Order ID</label>
                            <input
                                type="text"
                                value={orderId}
                                onChange={(e) => setOrderId(e.target.value)}
                                placeholder="e.g. #1024"
                                className="w-full p-4 border border-gray-300 rounded-sm focus:outline-none focus:border-black"
                            />
                        </div>
                        <div>
                            <label className="block text-[13px] font-bold uppercase mb-2">Email or Phone</label>
                            <input
                                type="text"
                                placeholder="e.g. user@example.com"
                                className="w-full p-4 border border-gray-300 rounded-sm focus:outline-none focus:border-black"
                            />
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-2">
                            Track
                        </button>
                    </form>

                    {status && (
                        <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded flex flex-col items-center">
                            <span className="text-[12px] text-gray-500 uppercase tracking-widest mb-1">Status</span>
                            <span className="text-[18px] font-bold text-green-600 uppercase">{status}</span>
                            <p className="text-[13px] text-gray-500 mt-2">Your order is currently being prepared.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TrackOrder;
