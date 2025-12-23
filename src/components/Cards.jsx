import React, { useState } from 'react'
import { HiOutlineShoppingCart, HiOutlineSearch } from 'react-icons/hi'

const Cards = ({ image, title, price, oldPrice, discount, colors }) => {
    const [selectedColor, setSelectedColor] = useState(0)

    return (
        <div className="flex flex-col items-center group cursor-pointer w-full font-['Montserrat']">
            <div className="relative overflow-hidden w-full aspect-[3/4.2]">
                {discount && (
                    <div className="absolute top-3 left-3 bg-[#222] text-white text-[11px] font-bold px-2 py-0.5 z-10">
                        {discount}
                    </div>
                )}

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Icons */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all">
                        <HiOutlineShoppingCart size={18} className="text-[#333]" />
                    </button>
                    <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all">
                        <HiOutlineSearch size={18} className="text-[#333]" />
                    </button>
                </div>
            </div>

            <div className="mt-5 text-center px-1 flex flex-col items-center">
                <h3 className="text-[13px] md:text-[14px] font-medium tracking-[0.05em] text-[#1a1a1a] uppercase mb-1.5 leading-tight group-hover:text-black min-h-[40px] flex items-center justify-center">
                    {title}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-3">
                    {oldPrice && (
                        <span className="text-[12px] text-[#888] line-through font-light">
                            {oldPrice}
                        </span>
                    )}
                    <span className="text-[13px] md:text-[14px] font-semibold text-[#1a1a1a]">
                        {price}
                    </span>
                </div>

                {/* Color Swatches */}
                {colors && colors.length > 0 && (
                    <div className="flex items-center gap-2 mb-4">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedColor(index);
                                }}
                                className={`w-5 h-5 rounded-full border p-[2px] cursor-pointer transition-all ${selectedColor === index ? 'border-[#333]' : 'border-transparent'}`}
                            >
                                <div
                                    className="w-full h-full rounded-full border border-gray-100 shadow-sm"
                                    style={{ backgroundColor: color }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards