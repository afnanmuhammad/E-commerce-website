import React from 'react'

const Cards = ({ image, title, price, oldPrice, discount }) => {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-full">
            <div className="relative overflow-hidden w-full aspect-[2/3]">
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


            </div>
            <div className="mt-4 text-center px-1">
                <h3 className="text-[12px] md:text-[13px] font-medium tracking-wider text-[#222] uppercase mb-1.5 leading-tight">
                    {title}
                </h3>
                <div className="flex items-center justify-center gap-3">
                    {oldPrice && (
                        <span className="text-[11px] md:text-[12px] text-[#888] line-through font-light">
                            {oldPrice}
                        </span>
                    )}
                    <span className="text-[12px] md:text-[13px] font-semibold text-[#222]">
                        {price}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Cards