import React from "react";
import Footer from "../components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const FAQs = () => {
    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat'] pt-24">
            <div className="max-w-[800px] mx-auto px-4 md:px-12 py-12">
                <h1 className="text-[28px] md:text-[34px] font-bold text-[#1a1a1a] mb-2 text-center uppercase tracking-wide">
                    Frequently Asked Questions
                </h1>
                <p className="text-center text-[#666] mb-12">Find answers to common questions about your shopping experience</p>

                <div className="space-y-4">
                    <Details summary="How long does delivery take?" content="Standard shipping takes 3-5 working days. Express shipping within Karachi may take 1-2 days." />
                    <Details summary="What is your return policy?" content="We have a 30-day return policy, which means you have 30 days after receiving your item to request a return." />
                    <Details summary="Do you offer international shipping?" content="Currently, we only ship within Pakistan. However, we are working on expanding our reach to international customers soon." />
                    <Details summary="How can I track my order?" content="Once your order is shipped, you will receive a tracking number via email/SMS. You can use this to track your order on our 'Track Your Order' page." />
                    <Details summary="Can I cancel my order?" content="You can cancel your order within 24 hours of placing it. Please contact our support team immediately." />
                    <Details summary="What payment methods do you accept?" content="We accept Visa, Mastercard, UnionPay, EasyPaisa, JazzCash, and Bank Transfers. Cash on Delivery is also available." />
                </div>
            </div>
            <Footer />
        </div>
    );
};

const Details = ({ summary, content }) => {
    return (
        <details className="group border border-gray-200 rounded-md bg-white overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors list-none">
                <span className="text-[14px] uppercase font-bold">{summary}</span>
                <span className="transition group-open:rotate-180">
                    <MdKeyboardArrowDown size={20} />
                </span>
            </summary>
            <div className="border-t border-gray-100 p-4 text-[14px] text-[#666] leading-relaxed bg-[#fafafa]">
                {content}
            </div>
        </details>
    )
}

export default FAQs;
