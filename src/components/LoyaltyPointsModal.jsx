import React from 'react'
import { MdClose } from 'react-icons/md'

const LoyaltyPointsModal = ({ isOpen, onClose, onYes, onNo }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg w-full max-w-[600px] p-8 relative shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <MdClose size={28} />
                </button>

                {/* Title */}
                <h2 className="text-[24px] font-normal text-[#333] mb-6">
                    Loyalty Points
                </h2>

                {/* Description */}
                <p className="text-[15px] text-[#666] leading-relaxed mb-8">
                    Do you wish to signup or use your loyalty points associated with your phone number?
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={onYes}
                        className="w-full bg-[#333] text-white py-4 rounded-md text-[15px] font-medium hover:bg-[#222] transition-colors"
                    >
                        Yes
                    </button>
                    <button
                        onClick={onNo}
                        className="w-full bg-white border-2 border-gray-300 text-[#333] py-4 rounded-md text-[15px] font-medium hover:bg-gray-50 transition-colors"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoyaltyPointsModal
