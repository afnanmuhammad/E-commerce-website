import React from "react";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-8 text-center uppercase tracking-wide">
                    Privacy Policy
                </h1>

                <div className="space-y-6 text-[14px] md:text-[15px] text-[#444] leading-relaxed bg-white p-8 md:p-12 border border-gray-100 rounded-md shadow-sm">
                    <p className="font-bold text-black uppercase mb-1">Effective Date: January 1, 2025</p>
                    <p>
                        At Zane, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website wearzane.com.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">1. Information We Collect</h3>
                    <p>
                        We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">2. How We Use Your Information</h3>
                    <p>
                        We use information that we collect about you or that you provide to us, including any personal information:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">3. Data Security</h3>
                    <p>
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
                    </p>

                    <h3 className="text-[16px] font-bold text-black uppercase mt-6">4. Contact Information</h3>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at: ask@wearzane.com.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
