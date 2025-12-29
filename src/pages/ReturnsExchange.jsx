import React from "react";
import Footer from "../components/Footer";

const ReturnsExchange = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-12 text-center uppercase tracking-wide">
                    Returns & Exchange
                </h1>

                <div className="space-y-8 text-[15px] text-[#444] leading-relaxed bg-white p-8 md:p-12 border border-gray-100 rounded-md shadow-sm">
                    <div>
                        <h3 className="text-[18px] font-bold text-black uppercase mb-3">Our Policy</h3>
                        <p>
                            We want you to love what you ordered! But if something isn't right, let us know. We offer exchanges and returns within <strong>30 days</strong> of purchase.
                        </p>
                    </div>

                    <hr className="border-gray-100" />

                    <div>
                        <h3 className="text-[18px] font-bold text-black uppercase mb-3">Conditions for Return</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Items must be unworn, unwashed, and with original tags attached.</li>
                            <li>Proof of purchase (Order ID) is required.</li>
                            <li>Sale items are final sale and cannot be returned unless defective.</li>
                        </ul>
                    </div>

                    <hr className="border-gray-100" />

                    <div>
                        <h3 className="text-[18px] font-bold text-black uppercase mb-3">How to Return</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Email us at <strong>returns@wearzane.com</strong> with your Order ID and reason for return.</li>
                            <li>We will provide you with a return shipping label and instructions.</li>
                            <li>Pack the items securely and drop them off at the designated courier center.</li>
                            <li>Once we receive your return, we will inspect it and process your refund/exchange within 5-7 working days.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ReturnsExchange;
