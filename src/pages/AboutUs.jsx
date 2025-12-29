import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[1000px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-8 text-center uppercase tracking-wide">
                    About Zane
                </h1>

                <div className="space-y-6 text-[15px] text-[#444] leading-relaxed">
                    <p>
                        Welcome to Zane, where fashion meets elegance. Established in 2025, we are a premium clothing brand dedicated to providing high-quality, contemporary apparel for men and women who appreciate style and substance.
                    </p>
                    <p>
                        Our journey began with a simple idea: to create a collection that blends minimalism with modern aesthetics. We believe that clothing is not just about covering up; it's about expressing your identity. That's why every piece in our collection is thoughtfully designed, sourcing the finest fabrics and employing meticulous craftsmanship.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        <div className="bg-[#f5f5f5] p-8 rounded-sm">
                            <h3 className="text-[18px] font-bold mb-3 uppercase">Our Mission</h3>
                            <p>To empower individuals through fashion that inspires confidence and celebrates authenticity.</p>
                        </div>
                        <div className="bg-[#f5f5f5] p-8 rounded-sm">
                            <h3 className="text-[18px] font-bold mb-3 uppercase">Our Vision</h3>
                            <p>To become a global leader in sustainable and stylish fashion, setting new standards for quality and design.</p>
                        </div>
                    </div>
                    <p>
                        At Zane, we are committed to sustainability and ethical practices. We work closely with our partners to ensure that our supply chain respects both people and the planet. Thank you for being part of our story.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
