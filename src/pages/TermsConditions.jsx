import React from "react";
import Footer from "../components/Footer";

const TermsConditions = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-8 text-center uppercase tracking-wide">
                    Terms & Conditions
                </h1>

                <div className="space-y-6 text-[14px] md:text-[15px] text-[#444] leading-relaxed bg-white p-8 md:p-12 border border-gray-100 rounded-md shadow-sm">
                    <p>
                        Welcome to wearzane.com. By accessing or using our website, you agree to be bound by these terms and conditions. Please read them carefully.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">1. General</h3>
                    <p>
                        We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">2. Products and Pricing</h3>
                    <p>
                        Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">3. Accuracy of Billing</h3>
                    <p>
                        We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">4. Governing Law</h3>
                    <p>
                        These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Pakistan.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsConditions;
