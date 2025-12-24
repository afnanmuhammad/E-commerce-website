import React from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import Footer from '../components/Footer'
import img5 from '../assets/images/16.png'
import img1 from '../assets/images/1.jpeg'

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            image: img5,
            title: 'Textured Knitted Polo Shirt – Light Olive',
            size: 'S',
            price: 'Rs.4,250.00',
            total: 'Rs.4,250.00',
            quantity: 1
        },
        {
            id: 2,
            image: img1,
            title: 'Tailored Herringbone Jacket – White',
            size: 'S',
            price: 'Rs.9,560.00',
            total: 'Rs.95,600.00',
            quantity: 10
        }
    ]

    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat']">
            {/* Page Header / Breadcrumbs */}
            <div className="pt-2 pb-6 px-4 md:px-12 border-b border-gray-100 bg-white">
                <div className="max-w-[1600px] mx-auto flex items-center gap-2 text-[11px] md:text-[12px] tracking-widest font-bold uppercase">
                    <span className="text-[#999] cursor-pointer hover:text-black transition-colors">HOME</span>
                    <span className="text-[#999]">|</span>
                    <span className="text-black">YOUR CART</span>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 md:px-12 py-10">
                <h1 className="text-center text-[24px] font-normal tracking-widest mb-12 uppercase text-[#1a1a1a]">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Column - Cart Items */}
                    <div className="flex-1">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] pb-4 border-b border-gray-200 text-[12px] font-bold tracking-widest text-[#1a1a1a] uppercase">
                            <div>Product</div>
                            <div>Price</div>
                            <div className="text-center">Quantity</div>
                            <div className="text-right">Total</div>
                        </div>

                        {/* Cart Items */}
                        <div className="flex flex-col">
                            {cartItems.map((item) => (
                                <div key={item.id} className="py-6 border-b border-gray-100 flex flex-col md:grid md:grid-cols-[3fr_1fr_1fr_1fr] items-center gap-6">
                                    {/* Product Info */}
                                    <div className="flex items-center gap-6 w-full">
                                        <button className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 hover:opacity-70 transition-opacity">
                                            <MdClose size={14} />
                                        </button>
                                        <div className="w-20 h-28 md:w-24 md:h-32 flex-shrink-0">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-[14px] text-[#333] font-normal leading-relaxed mb-1">{item.title}</h3>
                                            <p className="text-[13px] text-[#666] italic">Size: {item.size}</p>
                                        </div>
                                    </div>

                                    {/* Price Mobile Label */}
                                    <div className="flex md:hidden justify-between w-full items-center">
                                        <span className="text-[12px] font-bold uppercase">Price:</span>
                                        <div className="text-[14px] text-[#333]">{item.price}</div>
                                    </div>
                                    {/* Price Desktop */}
                                    <div className="hidden md:block text-[14px] text-[#333]">{item.price}</div>

                                    {/* Quantity */}
                                    <div className="flex md:hidden justify-between w-full items-center">
                                        <span className="text-[12px] font-bold uppercase">Quantity:</span>
                                        <div className="flex items-center border border-gray-200">
                                            <button className="px-3 py-2 hover:bg-gray-50">-</button>
                                            <span className="px-3 py-2 text-[13px] min-w-[30px] text-center">{item.quantity}</span>
                                            <button className="px-3 py-2 hover:bg-gray-50">+</button>
                                        </div>
                                    </div>
                                    {/* Quantity Desktop */}
                                    <div className="hidden md:flex justify-center">
                                        <div className="flex items-center border border-gray-200">
                                            <button className="px-3 py-2 hover:bg-gray-50 transition-colors">-</button>
                                            <span className="px-3 py-2 text-[13px] min-w-[30px] text-center">{item.quantity}</span>
                                            <button className="px-3 py-2 hover:bg-gray-50 transition-colors">+</button>
                                        </div>
                                    </div>

                                    {/* Total Mobile */}
                                    <div className="flex md:hidden justify-between w-full items-center">
                                        <span className="text-[12px] font-bold uppercase">Total:</span>
                                        <div className="text-[14px] text-[#333]">{item.total}</div>
                                    </div>
                                    {/* Total Desktop */}
                                    <div className="hidden md:block text-right text-[14px] text-[#333]">{item.total}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mt-8">
                            <Link to="/" className="text-[12px] font-bold tracking-widest uppercase text-[#333] hover:underline">
                                &lt; Continue Shopping
                            </Link>
                            <button className="bg-black text-white px-8 py-3 text-[12px] font-bold tracking-[0.15em] hover:opacity-80 transition-opacity uppercase">
                                Update Cart
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Summary & Estimates */}
                    <div className="w-full lg:w-[400px] bg-[#f9f9f9] p-8 h-fit">
                        <h2 className="text-[13px] font-bold tracking-widest uppercase mb-6 text-[#1a1a1a]">Get Shipping Estimates</h2>

                        <div className="space-y-4 mb-2">
                            <div>
                                <label className="block text-[13px] text-[#666] mb-2">Country</label>
                                <select className="w-full p-2.5 border border-gray-200 bg-white text-[13px] rounded-sm focus:outline-none focus:border-black">
                                    <option>Pakistan</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[13px] text-[#666] mb-2">Postal/Zip Code</label>
                                <input type="text" className="w-full p-2.5 border border-gray-200 bg-white rounded-sm focus:outline-none focus:border-black" />
                            </div>
                            <button className="w-full bg-black text-white py-3 text-[12px] font-bold tracking-[0.15em] hover:opacity-80 transition-opacity uppercase mb-4">
                                Calculate Shipping
                            </button>
                        </div>

                        <div className="mb-8">
                            <label className="block text-[12px] font-bold tracking-widest uppercase mb-4 text-[#1a1a1a]">
                                Add Special Instructions For Your Order
                            </label>
                            <textarea className="w-full h-24 p-2 border border-gray-200 bg-white rounded-sm resize-none focus:outline-none focus:border-black"></textarea>
                        </div>

                        <div className="border-t border-gray-200 pt-6 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-[13px] font-bold tracking-widest uppercase text-[#1a1a1a]">Subtotal</span>
                                <span className="text-[15px] font-bold text-[#1a1a1a]">Rs.99,850.00</span>
                            </div>
                            <div className="flex justify-end text-[13px] italic text-[#666]">
                                You're saving: <span className="ml-1">Rs.23,900.00</span>
                            </div>

                            <div className="flex items-center gap-2 justify-end text-[#1a1a1a] py-2">
                                <FaTruck size={14} />
                                <p className="text-[11px] font-bold tracking-widest uppercase">
                                    Congratulations! You got FREE SHIPPING
                                </p>
                            </div>

                            <p className="text-right text-[12px] text-[#666] pb-4">
                                Shipping & taxes calculated at checkout
                            </p>

                            <Link to="/checkout" className="block w-full bg-black text-white py-4 text-[12px] font-bold tracking-[0.15em] hover:opacity-80 transition-opacity uppercase shadow-md text-center">
                                Proceed to Checkout
                            </Link>

                            <button className="w-full bg-white border border-gray-300 text-[#1a1a1a] py-3 text-[13px] hover:bg-gray-50 transition-colors">
                                Checkout using Rewards
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Floating Buttons */}
            {/* WhatsApp */}
            <div className="fixed bottom-8 left-8 z-50">
                <a href="#" className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
            </div>

            {/* Back to Top */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
            </div>
        </div>
    )
}

export default Cart
