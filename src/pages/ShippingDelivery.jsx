import React from "react";
import Footer from "../components/Footer";
import { FaTruck, FaClock, FaGlobe } from "react-icons/fa";

const ShippingDelivery = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-12 text-center uppercase tracking-wide">
                    Shipping & Delivery
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
                        <div className="bg-gray-100 p-4 rounded-full mb-4 text-black">
                            <FaTruck size={24} />
                        </div>
                        <h3 className="text-[16px] font-bold uppercase mb-2">Free Shipping</h3>
                        <p className="text-[13px] text-[#666]">On all orders above Rs. 5000 within Pakistan.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
                        <div className="bg-gray-100 p-4 rounded-full mb-4 text-black">
                            <FaClock size={24} />
                        </div>
                        <h3 className="text-[16px] font-bold uppercase mb-2">Delivery Time</h3>
                        <p className="text-[13px] text-[#666]">Standard Delivery: 4-5 Working Days.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm rounded-lg">
                        <div className="bg-gray-100 p-4 rounded-full mb-4 text-black">
                            <FaGlobe size={24} />
                        </div>
                        <h3 className="text-[16px] font-bold uppercase mb-2">Nationwide</h3>
                        <p className="text-[13px] text-[#666]">We ship to all major cities and towns in Pakistan.</p>
                    </div>
                </div>

                <div className="prose max-w-none text-[15px] text-[#444] bg-white p-8 md:p-12 border border-gray-100 rounded-md">
                    <h3 className="text-[18px] font-bold text-black uppercase mb-4">Shipping Policy</h3>
                    <p className="mb-4">
                        We make every effort to deliver your order within the estimated timestamps. However, delays may occur due to unforeseen circumstances or peak seasons.
                    </p>
                    <p className="mb-4">
                        <strong>Order Confirmation:</strong> You will receive an email/SMS confirmation once your order is placed.
                    </p>
                    <p className="mb-4">
                        <strong>Tracking:</strong> Once your order is shipped, you will receive a tracking number to monitor your package's journey.
                    </p>
                    <p>
                        <strong>Delivery Charges:</strong> Standard delivery charge is Rs. 200. Free delivery on orders above Rs. 5000.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShippingDelivery;
