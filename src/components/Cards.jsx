import React, { useState } from "react";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const Cards = ({ id, image, title, price, oldPrice, discount, colors, className, viewMode = "grid" }) => {
  const [selectedColor, setSelectedColor] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    // Construct product object
    const productToAdd = {
      id: id || title, // fallback to title if id is missing
      image,
      title,
      price,
      color: colors && colors.length > 0 ? colors[selectedColor] : 'Standard',
      size: 'M', // Default size for now
    };

    addToCart(productToAdd);
    // Optional: Add visual feedback here
  };

  const isList = viewMode === "list";

  return (
    <div
      className={`flex group cursor-pointer w-full font-['Montserrat'] shadow-sm hover:shadow-lg transition-shadow bg-white ${isList ? "flex-row gap-6 p-6 items-center" : "flex-col items-center p-4"
        }`}
    >
      <div
        className={`relative overflow-hidden ${isList ? "w-[240px] h-[300px] flex-shrink-0" : "w-full md:h-60 lg:h-50 sm:h-64"
          }`}
      >
        {discount && (
          <div className="absolute top-3 left-3 bg-[#222] text-white text-[11px] font-bold px-2 py-0.5 z-10">
            {discount}
          </div>
        )}

        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover object-top ${className}`}
        />

        {/* Hover Icons */}
        <div
          className={`absolute bottom-4 right-4 flex flex-col gap-2 transition-all duration-300 ${isList
              ? "opacity-100 translate-y-0"
              : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all"
          >
            <HiOutlineShoppingCart size={18} className="text-[#333]" />
          </button>
          <button className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-110 transition-all">
            <HiOutlineSearch size={18} className="text-[#333]" />
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col px-1 ${isList ? "items-start text-left flex-1" : "items-center text-center mt-5"
          }`}
      >
        <h3
          className={`text-[13px] md:text-[14px] font-medium tracking-[0.05em] text-[#1a1a1a] uppercase mb-1.5 leading-tight group-hover:text-black flex ${isList ? "min-h-0 justify-start" : "min-h-[40px] justify-center"
            }`}
        >
          {title}
        </h3>
        <div
          className={`flex items-center gap-2 mb-3 ${isList ? "justify-start" : "justify-center"
            }`}
        >
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
                className={`w-5 h-5 rounded-full border p-[2px] cursor-pointer transition-all ${selectedColor === index
                    ? "border-[#333]"
                    : "border-transparent"
                  }`}
              >
                <div
                  className="w-full h-full rounded-full border border-gray-100 shadow-sm"
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        )}

        {isList && (
          <p className="text-[13px] text-[#666] leading-relaxed mb-4 max-w-xl hidden md:block">
            Experience the perfect blend of style and comfort with our premium collection.
            Crafted with attention to detail and high-quality materials to ensure you look based.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cards;
