import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import LoyaltyPointsModal from './LoyaltyPointsModal'
import img5 from '../assets/images/16.png'
import img1 from '../assets/images/1.jpeg'

const CartModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    const navigate = useNavigate()
    const [showLoyaltyModal, setShowLoyaltyModal] = useState(false)

    const cartItems = [
        {
            id: 1,
            image: img5,
            title: 'Textured Knitted Polo Shirt – Light Olive',
            size: 'S',
            price: 'Rs.4,250.00',
            quantity: 1
        },
        {
            id: 2,
            image: img1, // Placeholder for the white jacket
            title: 'Tailored Herringbone Jacket – White',
            size: 'S',
            price: 'Rs.9,560.00',
            quantity: 10
        }
    ]

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            {/* Modal Container */}
            <div className="bg-white w-full max-w-[900px] max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
                >
                    <MdClose size={24} />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Cart Items */}
                    <div className="flex-1 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
                        <h2 className="text-[15px] text-[#444] tracking-widest uppercase font-normal mb-8 border-b border-gray-100 pb-2">
                            Your Cart (11)
                        </h2>

                        <div className="space-y-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 sm:gap-6">
                                    {/* Image */}
                                    <div className="w-24 h-32 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className="flex flex-1 flex-col justify-between py-1">
                                        <div>
                                            <h3 className="text-[14px] text-[#333] font-normal leading-relaxed mb-1 pr-4 font-['Montserrat']">
                                                {item.title}
                                            </h3>
                                            <p className="text-[13px] text-[#666] mb-2">{item.size}</p>
                                            <p className="text-[14px] text-[#333] mb-4">{item.price}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            {/* Quantity Selector */}
                                            <div className="flex items-center border border-gray-200 rounded-sm">
                                                <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 transition-colors">-</button>
                                                <span className="px-2 text-[13px] text-[#333] min-w-[30px] text-center">{item.quantity}</span>
                                                <button className="px-3 py-1 text-gray-500 hover:bg-gray-50 transition-colors">+</button>
                                            </div>

                                            <button className="text-[11px] text-[#888] underline hover:text-black transition-colors tracking-wide uppercase">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Summary */}
                    <div className="w-full lg:w-[400px] p-6 md:p-10 bg-white">
                        {/* Free Shipping Banner */}
                        <div className="bg-[#f9f9f9] py-4 px-4 flex items-center justify-center gap-3 mb-8">
                            <FaTruck className="text-[#333] text-lg" />
                            <p className="text-[11px] font-bold tracking-widest text-[#333] uppercase">
                                Congratulations! You got free shipping
                            </p>
                        </div>

                        {/* Total */}
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-[14px] font-bold tracking-widest text-[#333] uppercase">Total:</span>
                            <span className="text-[16px] text-[#333]">Rs.99,850.00</span>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => {
                                    onClose()
                                    navigate('/checkout')
                                }}
                                className="w-full py-3.5 border border-[#333] text-[#333] text-[12px] font-bold tracking-[0.15em] hover:bg-gray-50 transition-colors uppercase"
                            >
                                Proceed to Checkout
                            </button>
                            <button
                                onClick={() => {
                                    onClose()
                                    navigate('/cart')
                                }}
                                className="w-full py-3.5 bg-black text-white text-[12px] font-bold tracking-[0.15em] hover:opacity-90 transition-opacity uppercase shadow-xl"
                            >
                                View Cart
                            </button>
                            <button
                                onClick={() => setShowLoyaltyModal(true)}
                                className="w-full py-3.5 border border-[#333] text-[#333] text-[12px] font-normal tracking-[0.05em] hover:bg-gray-50 transition-colors"
                            >
                                Checkout using Rewards
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loyalty Points Modal */}
            <LoyaltyPointsModal
                isOpen={showLoyaltyModal}
                onClose={() => setShowLoyaltyModal(false)}
                onYes={() => {
                    setShowLoyaltyModal(false)
                    onClose()
                    navigate('/checkout')
                }}
                onNo={() => {
                    setShowLoyaltyModal(false)
                    onClose()
                    navigate('/checkout')
                }}
            />
        </div>
    )
}

export default CartModal
