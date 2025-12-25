import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import logo from '../assets/images/75logo.png' // Assuming this is the logo, or I might need a text logo 'Zane'
import img5 from '../assets/images/16.png'
import img1 from '../assets/images/1.jpeg'
import unionPayIcon from '../assets/icons/unionpay-card.svg'
import mastarCard from '../assets/icons/mastercard-svg.svg'

const Checkout = () => {
    const [showOrderSummary, setShowOrderSummary] = useState(false)

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
            image: img1,
            title: 'Tailored Herringbone Jacket – White',
            size: 'S',
            price: 'Rs.95,600.00',
            quantity: 10
        }
    ]

    return (
        <div className="flex flex-col lg:flex-row min-h-screen font-['Montserrat']">
            {/* Left Side - Scrolling Form */}
            <div className="flex-1 bg-white lg:border-r border-gray-200 overflow-y-auto h-auto lg:h-screen">
                <div className="max-w-[600px] ml-auto mr-auto lg:mr-0 px-4 py-8 lg:px-12 lg:py-12">
                    {/* Header Logo */}
                    <div className="mb-8 pl-1">
                        <img src={logo} alt="Zane" className="h-[50px] object-contain" />
                    </div>

                    {/* Mobile Order Summary Toggle */}
                    <div className="lg:hidden bg-[#fafafa] border-y border-gray-200 -mx-4 px-4 py-4 mb-8">
                        <button
                            onClick={() => setShowOrderSummary(!showOrderSummary)}
                            className="flex items-center justify-between w-full text-[13px] text-[#333]"
                        >
                            <div className="flex items-center gap-2 text-blue-600">
                                <HiOutlineShoppingBag size={18} />
                                <span>{showOrderSummary ? 'Hide' : 'Show'} order summary</span>
                                {showOrderSummary ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                            <span className="font-bold">Rs. 99,850.00</span>
                        </button>

                        {showOrderSummary && (
                            <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-16 h-16 border border-gray-200 rounded-md overflow-hidden bg-white">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-[13px] text-[#333] font-medium">{item.title}</h4>
                                            <p className="text-[12px] text-[#666]">{item.size}</p>
                                        </div>
                                        <div className="text-[13px] text-[#333]">{item.price}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact Section */}
                    <div className="mb-10">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-[18px] font-medium text-[#333]">Contact</h2>
                            <Link to="/login" className="text-[13px] text-blue-600 hover:underline">Sign in</Link>
                        </div>
                        <input
                            type="text"
                            placeholder="Email or mobile phone number"
                            className="w-full p-3 border border-gray-300 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 mb-3 transition-shadow shadow-sm"
                        />
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex items-center">
                                <input type="checkbox" id="news" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all" defaultChecked />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <label htmlFor="news" className="text-[14px] text-[#333] cursor-pointer selection:bg-transparent">Email me with news and offers</label>
                        </div>
                    </div>

                    {/* Delivery Section */}
                    <div className="mb-10">
                        <h2 className="text-[18px] font-medium text-[#333] mb-4">Delivery</h2>
                        <div className="space-y-3">
                            <div className="relative">
                                <label className="absolute top-2 left-3 text-[11px] text-[#666] pointer-events-none">Country/Region</label>
                                <select className="w-full pt-6 pb-2 px-3 border border-gray-300 rounded-md text-[14px] bg-white text-[#333] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm appearance-none cursor-pointer">
                                    <option>Pakistan</option>
                                </select>
                                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                                    <MdKeyboardArrowDown size={20} className="text-gray-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="First name" className="p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                                <input type="text" placeholder="Last name" className="p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                            </div>

                            <input type="text" placeholder="Address" className="w-full p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />

                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="City" className="p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                                <input type="text" placeholder="Postal code (optional)" className="p-3 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                            </div>

                            <div className="relative">
                                <input type="text" placeholder="Phone" className="w-full p-3 pr-10 border border-gray-200 rounded-md text-[14px] placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm" />
                                <div className="absolute top-1/2 right-3 -translate-y-1/2 group cursor-pointer">
                                    <div className="w-4 h-4 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center text-[10px] font-bold">?</div>
                                    <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-[11px] rounded hidden group-hover:block z-10">
                                        In case we need to contact you about your order
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5 mt-2">
                                <div className="relative flex items-center">
                                    <input type="checkbox" id="save-info" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all" />
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <label htmlFor="save-info" className="text-[14px] text-[#333] cursor-pointer">Save this information for next time</label>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="mb-10">
                        <h2 className="text-[18px] font-medium text-[#333] mb-4">Shipping method</h2>
                        <div className="border border-gray-200 rounded-md overflow-hidden bg-[#f9f9f9]">
                            <label className="flex items-center justify-between p-4 cursor-pointer border-b border-gray-200 bg-[#f0f5ff] border-blue-600 relative z-10">
                                <div className="absolute inset-0 border-[1.5px] border-blue-600 pointer-events-none rounded-t-md"></div>
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="shipping" defaultChecked className="w-4 h-4 accent-blue-600" />
                                    <span className="text-[14px] text-[#333]">FREE Standard Shipping</span>
                                </div>
                                <span className="text-[14px] font-bold text-[#333]">FREE</span>
                            </label>
                            <div className="px-11 pb-4 pt-1 text-[12px] text-[#666] bg-[#f0f5ff] border-b border-gray-200 border-x border-blue-600 relative -mt-0.5 rounded-b-md mb-0.5 mx-[1.5px] w-[calc(100%-3px)]">Delivered in 3-5 Working Days</div>

                            <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-white transition-colors">
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="shipping" className="w-4 h-4 accent-blue-600" />
                                    <span className="text-[14px] text-[#333]">Express Shipping (Within Karachi)</span>
                                </div>
                                <span className="text-[14px] text-[#333]">Rs 450.00</span>
                            </label>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="mb-10">
                        <h2 className="text-[18px] font-medium text-[#333] mb-1">Payment</h2>
                        <p className="text-[13px] text-[#666] mb-4">All transactions are secure and encrypted.</p>

                        <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
                            {/* Credit Card Option */}
                            <div className="">
                                <label className="flex items-center justify-between p-4 cursor-pointer bg-[#f0f5ff] border border-blue-600 rounded-t-md relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="payment" defaultChecked className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-600 checked:bg-blue-600 transition-all" />
                                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
                                        </div>
                                        <span className="text-[14px] text-[#333] font-medium">Online Payment through Bank Debit & Credit Cards</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center">
                                            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" alt="Visa" className="h-[15px] w-auto" />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <img src={mastarCard} alt="Mastercard" className="h-[20px] w-auto" />
                                        </div>
                                    </div>
                                </label>
                                <div className="p-8  bg-[#fafafa] flex flex-col items-center justify-center gap-4 text-center ">
                                    <div className="w-[140px] h-[90px] mx-auto border border-gray-300 bg-white rounded flex items-center justify-center relative shadow-sm">
                                        {/* Browser window controls */}
                                        <div className="absolute top-2 left-2 flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                        </div>
                                        {/* Redirect Icon */}
                                        <div className="w-[80px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><path d="M9 14l2 2 4-4" /></svg>
                                        </div>
                                    </div>
                                    <p className="text-[13px] text-[#555] max-w-sm leading-relaxed px-4">
                                        After clicking "Pay now", you will be redirected to Online Payment through Bank Debit & Credit Cards to complete your purchase securely.
                                    </p>
                                </div>
                            </div>

                            {/* Other Payment Options */}
                            <label className="flex items-center justify-between p-4 cursor-pointer border-t border-gray-200 hover:bg-[#f9f9f9] transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="relative flex items-center justify-center">
                                        <input type="radio" name="payment" className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 hover:border-blue-500 checked:border-blue-600 checked:bg-blue-600 transition-all" />
                                        <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none"></div>
                                    </div>
                                    <span className="text-[13px] text-[#333]">Online Payment through EasyPaisa / Jazz Cash / Bank Transfer</span>
                                </div>
                                <div className="flex items-center">
                                    <img src={unionPayIcon} alt="UnionPay" className="h-[24px] w-auto" />
                                </div>
                            </label>

                            <label className="flex items-center p-4 cursor-pointer border-t border-gray-200 hover:bg-[#f9f9f9]">
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="payment" className="w-4 h-4 accent-blue-600" />
                                    <span className="text-[14px] text-[#333]">Bank Deposit</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Billing Address */}
                    <div className="mb-8">
                        <h2 className="text-[18px] font-medium text-[#333] mb-4">Billing address</h2>
                        <div className="border border-gray-200 rounded-md overflow-hidden bg-white">
                            <label className="flex items-center p-4 cursor-pointer bg-[#f0f5ff] border border-blue-600 rounded-t-md relative z-10 transition-colors">
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="billing" defaultChecked className="w-4 h-4 accent-blue-600" />
                                    <span className="text-[14px] text-[#333]">Same as shipping address</span>
                                </div>
                            </label>
                            <label className="flex items-center p-4 cursor-pointer border-t border-gray-200 hover:bg-[#f9f9f9] transition-colors">
                                <div className="flex items-center gap-3">
                                    <input type="radio" name="billing" className="w-4 h-4 accent-blue-600" />
                                    <span className="text-[14px] text-[#333]">Use a different billing address</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Pay Now Button */}
                    <button className="w-full bg-[#1b3257] hover:bg-[#112341] text-white py-4 rounded-md text-[17px] font-semibold transition-colors mb-6 shadow-md">
                        Pay now
                    </button>

                    {/* Footer Links */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-blue-600 border-t border-gray-200 pt-4">
                        <a href="#" className="hover:underline">Refund policy</a>
                        <a href="#" className="hover:underline">Shipping</a>
                        <a href="#" className="hover:underline">Privacy policy</a>
                        <a href="#" className="hover:underline">Terms of service</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>

                </div>
            </div >

            {/* Right Side - Static Summary */}
            <div div className="hidden lg:block w-[45%] bg-[#fafafa] border-l border-gray-200 h-screen sticky top-0 overflow-y-auto" >
                <div className="max-w-[450px] p-12">
                    <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 border border-gray-200 rounded-md overflow-hidden bg-white">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center opacity-90">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="max-w-[200px]">
                                        <h4 className="text-[14px] text-[#333] font-medium leading-tight">{item.title}</h4>
                                        <p className="text-[12px] text-[#666] mt-1">{item.size}</p>
                                    </div>
                                </div>
                                <div className="text-[14px] font-medium text-[#333]">{item.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 mb-6 pb-6 border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Discount code or gift card"
                            className="flex-1 p-3 border border-gray-300 rounded-md text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-5 py-3 bg-gray-200 text-gray-500 font-medium rounded-md text-[14px] cursor-not-allowed hover:bg-gray-300 transition-colors">
                            Apply
                        </button>
                    </div>

                    <div className="space-y-3 pb-6 border-b border-gray-200 text-[14px] text-[#333]">
                        <div className="flex justify-between">
                            <span>Subtotal • {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</span>
                            <span className="font-medium">Rs 99,850.00</span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <span>Shipping</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </div>
                            <span className="font-medium">FREE</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-6">
                        <span className="text-[16px] text-[#333] font-medium">Total</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-[12px] text-[#666]">PKR</span>
                            <span className="text-[20px] font-bold text-[#333]">Rs 99,850.00</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Checkout
