import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { HiViewGrid, HiViewList } from 'react-icons/hi'
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/6.png'
import img3 from "../assets/images/100.png"
import img4 from "../assets/images/113.png"
import img5 from "../assets/images/16.png"
import img6 from "../assets/images/52.png"
import img7 from "../assets/images/64.png"
import img8 from "../assets/images/66.png"
import img9 from "../assets/images/87.png"
import img10 from "../assets/images/91.png"

const Clearance = () => {
    const products = [
        {
            image: img1, // Placeholder image as I don't have the exact one from screenshot
            title: 'PLEATED WIDE LEG PANTS- BLACK',
            price: 'Rs.4,250.00',
            oldPrice: 'Rs.4,850.00',
            discount: '-12%',
            colors: ['#000000', '#f5f5dc', '#ffffff'] // Inferring colors from dots: Black, Beige, White
        },
        {
            image: img2,
            title: 'STRETCH CHINO PANTS – STONE',
            price: 'Rs.2,960.00',
            oldPrice: 'Rs.3,950.00',
            discount: '-25%',
            colors: ['#d2b48c', '#000000'] // Stone/Beige, Black
        },
        {
            image: img3,
            title: 'STRETCH CHINO PANTS – BLACK',
            price: 'Rs.2,960.00',
            oldPrice: 'Rs.3,950.00',
            discount: '-25%',
            colors: ['#f5f5dc', '#000000'] // Beige, Black
        },
        {
            image: img4,
            title: 'STRETCH CARGO PANTS – GREY',
            price: 'Rs.3,190.00',
            oldPrice: 'Rs.4,250.00',
            discount: '-24%',
            colors: ['#808080', '#556b2f'] // Grey, Olive Green
        },
        {
            image: img5,
            title: 'EVERYDAY RELAXED SWEATPANTS – BLACK',
            price: 'Rs.2,450.00',
            oldPrice: 'Rs.3,450.00',
            discount: '-29%',
            colors: ['#000000']
        },
        {
            image: img6,
            title: 'COTTON TEXTURED SHIRT',
            price: 'Rs.2,150.00',
            oldPrice: 'Rs.3,250.00',
            discount: '-34%',
            colors: ['#ffffff', '#000000']
        },
        {
            image: img7,
            title: 'SLIM FIT DENIM JEANS',
            price: 'Rs.2,950.00',
            oldPrice: 'Rs.4,950.00',
            discount: '-40%',
            colors: ['#000080']
        },
        {
            image: img8,
            title: 'BASIC CREW NECK TEE',
            price: 'Rs.1,250.00',
            oldPrice: 'Rs.1,950.00',
            discount: '-36%',
            colors: ['#ffffff', '#000000', '#808080']
        },
    ]

    return (
        <div className="w-full bg-[#fdfdfd] min-h-screen font-['Montserrat']">
            {/* Page Header / Breadcrumbs */}
            <div className="pt-2 pb-6 px-4 md:px-12 border-b border-gray-100 bg-white">
                <div className="max-w-[1600px] mx-auto flex items-center gap-2 text-[11px] md:text-[12px] tracking-widest font-bold uppercase">
                    <span className="text-[#999] cursor-pointer hover:text-black transition-colors">HOME</span>
                    <span className="text-[#999]">|</span>
                    <span className="text-black">CLEARANCE</span>
                </div>
            </div>

            {/* Filter and View Toggles Bar */}
            <div className="bg-[#f5f5f5] py-4 px-4 md:px-12">
                <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-[13px] md:text-[14px] text-[#444] italic font-light">
                        Showing {products.length} of {products.length} products
                    </div>

                    <div className="flex items-center gap-6">
                        {/* View Icons */}
                        <div className="flex items-center gap-3 border-r border-gray-300 pr-6 mr-2">
                            <button className="text-[#333] hover:text-black transition-colors">
                                <HiViewGrid size={22} />
                            </button>
                            <button className="text-[#999] hover:text-black transition-colors">
                                <HiViewList size={22} />
                            </button>
                        </div>

                        {/* Dropdown */}
                        <div className="relative group">
                            <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] text-[#222] focus:outline-none cursor-pointer hover:border-black transition-all rounded-md">
                                <option>Featured</option>
                                <option>Best Selling</option>
                                <option>Alphabetically, A-Z</option>
                                <option>Alphabetically, Z-A</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                                <option>Date, old to new</option>
                                <option>Date, new to old</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#666]">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <section className="py-12 px-4 md:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product, index) => (
                        <Cards
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            discount={product.discount}
                            colors={product.colors}
                        />
                    ))}
                </div>
            </section>

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

export default Clearance