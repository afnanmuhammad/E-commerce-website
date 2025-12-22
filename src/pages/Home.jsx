import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import CategorySection from '../components/CategorySection'
import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/6.png'
import image3 from "../assets/images/100.png"
import image4 from "../assets/images/113.png"

const Home = () => {
    const products = [
        {
            image: image1,
            title: 'AUTUMN GLOW STRIPPED POLO SWEATER - BROWN',
            price: 'Rs.5,960.00',
            oldPrice: 'Rs.7,950.00',
            discount: '-25%'
        },
        {
            image: image2,
            title: 'QUARTER ZIP SWEATER - ASH GRAY',
            price: 'Rs.6,450.00'
        },
        {
            image: image3,
            title: 'COCOA SOFT KNIT CARDIGAN - BROWN',
            price: 'Rs.5,960.00',
            oldPrice: 'Rs.7,950.00',
            discount: '-25%'
        },
        {
            image: image4,
            title: 'CLASSIC QUARTER ZIP SWEATSHIRT - BROWN',
            price: 'Rs.5,450.00'
        },
        {
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop',
            title: 'DOUBLE BREASTED CROPPED TRENCH COAT - KHAKI',
            price: 'Rs.7,170.00',
            oldPrice: 'Rs.10,250.00',
            discount: '-30%'
        }
    ]


    return (
        <div className="w-full bg-[#f5f5f5] relative min-h-screen overflow-x-hidden">
            <Hero />

            <section className="py-12 px-4 md:px-12 max-w-[1600px] mx-auto relative">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-2 uppercase text-center">
                        MINIMAL CORE
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-[#666] font-light text-center">
                        Tailored to keep you cozy this winter season!
                    </p>
                </div>

                {/* Grid Container with Arrows */}
                <div className="relative group/carousel">
                    {/* Left Arrow */}
                    <button className="absolute -left-5 md:left-[-50px] top-[35%] -translate-y-1/2 text-[#333] hover:text-black transition-all z-30 opacity-60 hover:opacity-100 hidden sm:block">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                        {products && products.map((product, index) => (
                            <Cards
                                key={index}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                discount={product.discount}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button className="absolute -right-5 md:right-[-50px] top-[35%] -translate-y-1/2 text-[#333] hover:text-black transition-all z-30 opacity-60 hover:opacity-100 hidden sm:block">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </section>

            <CategorySection />

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

export default Home
