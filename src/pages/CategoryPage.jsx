import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { HiViewGrid, HiViewList } from "react-icons/hi";

// Importing images from assets
import img1 from "../assets/images/1.jpeg";
import img2 from "../assets/images/6.png";
import img3 from "../assets/images/100.png";
import img4 from "../assets/images/113.png";
import img5 from "../assets/images/16.png";
import img6 from "../assets/images/52.png";
import img7 from "../assets/images/64.png";
import img8 from "../assets/images/66.png";
import img9 from "../assets/images/87.png";
import img10 from "../assets/images/91.png";
import img11 from "../assets/images/72.png";
import img12 from "../assets/images/83.png";

const CategoryPage = ({ section, baseRoute }) => {
    const { category } = useParams();
    const [viewMode, setViewMode] = useState("grid");

    // Format the category slug for display (e.g., "dresses" -> "DRESSES", "co-ord-sets" -> "CO ORD SETS")
    const formattedCategory = category
        ? category.replace(/-/g, " ").toUpperCase()
        : "";

    // Mock product database - assigning random products to categories for demonstration
    const getAllProducts = () => [
        {
            image: img5,
            title: "PUFFER GILLET - BLACK",
            price: "Rs.4,680.00",
            oldPrice: "Rs.6,250.00",
            discount: "-25%",
            colors: ["#ffffff", "#000000"],
            tags: ["jackets", "tops", "new-arrivals", "men-jackets"],
        },
        {
            image: img6,
            title: "FULL ZIPPER JACKET - IVORY",
            price: "Rs.6,330.00",
            oldPrice: "Rs.7,450.00",
            discount: "-15%",
            colors: ["#8b7367", "#fdf5e6"],
            tags: ["jackets", "tops", "men-jackets", "clearance"],
        },
        {
            image: img7,
            title: "EVERYDAY WIDE LEG SWEATPANTS - BROWN",
            price: "Rs.4,450.00",
            colors: ["#4b3621", "#191970", "#2f4f4f", "#583c4b"],
            tags: ["pants", "bottoms", "men-bottoms", "women-pants"],
        },
        {
            image: img8,
            title: "CLASSIC QUARTER ZIP-UP SWEATSHIRT - BROWN",
            price: "Rs.5,450.00",
            colors: ["#4e3524", "#1c1c28"],
            tags: ["sweatshirts-hoodies", "tops", "men-sweatshirts-hoodies"],
        },
        {
            image: img1,
            title: "AUTUMN GLOW STRIPPED POLO SWEATER - BROWN",
            price: "Rs.5,960.00",
            oldPrice: "Rs.7,950.00",
            discount: "-25%",
            colors: ["#5c4033", "#d2b48c"],
            tags: ["sweaters", "tops", "men-sweater"],
        },
        {
            image: img2,
            title: "QUARTER ZIP SWEATER - ASH GRAY",
            price: "Rs.6,450.00",
            colors: ["#b2beb5", "#000000"],
            tags: ["sweaters", "tops", "men-sweater"],
        },
        {
            image: img3,
            title: "COCOA SOFT KNIT CARDIGAN - BROWN",
            price: "Rs.5,960.00",
            oldPrice: "Rs.7,950.00",
            discount: "-25%",
            colors: ["#4a2c2a", "#f5f5dc"],
            tags: ["dresses", "tops", "skirts", "women-dresses", "women-skirts"],
        },
        {
            image: img4,
            title: "CLASSIC QUARTER ZIP SWEATSHIRT - BROWN",
            price: "Rs.5,450.00",
            colors: ["#3d2b1f", "#000080"],
            tags: ["sweatshirts-hoodies", "men-sweatshirts-hoodies"],
        },
        {
            image: img9,
            title: "HERITAGE CABLE KNIT SWEATER – COFFEE BROWN",
            price: "Rs.8,450.00",
            colors: ["#181f36", "#5d4037"],
            tags: ["men-sweater", "sweaters", "tops"],
        },
        {
            image: img10,
            title: "CLASSIC QUARTER ZIP SWEATSHIRT – BLACK",
            price: "Rs.5,450.00",
            colors: ["#6d4c41", "#000000"],
            tags: ["men-sweatshirts-hoodies", "sweatshirts-hoodies", "tops"],
        },
        {
            image: img11,
            title: "SLIM FIT CHINOS - BEIGE",
            price: "Rs.3,950.00",
            colors: ["#f5f5dc", "#000000", "#000080"],
            tags: ["men-bottoms", "pants", "women-pants"],
        },
        {
            image: img12,
            title: "PREMIUM COTTON SHIRT - WHITE",
            price: "Rs.4,850.00",
            oldPrice: "Rs.5,950.00",
            discount: "-18%",
            colors: ["#ffffff", "#87ceeb"],
            tags: ["shirts", "men-shirts", "men-polo-shirts", "seasonal-sale", "tops", "t-shirts", "women-shirts"],
        },
        // Additional mock products to populate fields
        {
            image: img1,
            title: "ELEGANT SUMMER DRESS - FLORAL",
            price: "Rs.6,850.00",
            colors: ["#ffb6c1", "#ffffff"],
            tags: ["dresses", "women-dresses", "tops"],
        },
        {
            image: img2,
            title: "CASUAL LINEN SHIRT - BLUE",
            price: "Rs.3,450.00",
            colors: ["#87ceeb", "#ffffff"],
            tags: ["shirts", "men-shirts", "women-shirts", "tops"],
        },
        {
            image: img8,
            title: "RELAXED CARGO PANTS - OLIVE",
            price: "Rs.5,250.00",
            colors: ["#556b2f", "#000000"],
            tags: ["pants", "women-pants", "men-bottoms"],
        },
        {
            image: img5,
            title: "BASIC CREW NECK T-SHIRT - WHITE",
            price: "Rs.1,250.00",
            colors: ["#ffffff", "#000000", "#808080"],
            tags: ["t-shirts", "tops", "men-tshirts", "women-t-shirts"],
        }
    ];

    // Filter products based on the category slug
    // Note: ideally tags would distinguish between women-tops and men-tops, but for this demo simplifying
    const products = getAllProducts().filter(p => {
        if (!p.tags) return true; // show all if no tags logic 
        return p.tags.some(tag => tag === category || tag === `${section.toLowerCase()}-${category}`);
    });

    // If no products found, just show all for demo purposes instead of empty page
    const displayProducts = products.length > 0 ? products : getAllProducts().slice(0, 4);

    return (
        <div className="w-full mt-25 bg-[#fdfdfd] min-h-screen font-['Montserrat']">
            {/* Page Header / Breadcrumbs */}
            <div className="pt-2 pb-6 px-4 md:px-12 border-b border-gray-100 bg-white">
                <div className="max-w-[1600px] mx-auto flex items-center gap-2 text-[11px] md:text-[12px] tracking-widest font-bold uppercase">
                    <Link to="/" className="text-[#999] cursor-pointer hover:text-black transition-colors">
                        HOME
                    </Link>
                    <span className="text-[#999]">|</span>
                    <Link to={baseRoute} className="text-[#999] cursor-pointer hover:text-black transition-colors">
                        {section.toUpperCase()}
                    </Link>
                    <span className="text-[#999]">|</span>
                    <span className="text-black">{formattedCategory}</span>
                </div>
            </div>

            {/* Filter and View Toggles Bar */}
            <div className="bg-[#f5f5f5] py-4 px-4 md:px-12">
                <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-[13px] md:text-[14px] text-[#444] italic font-light">
                        Showing {displayProducts.length} products
                    </div>

                    <div className="flex items-center gap-6">
                        {/* View Icons */}
                        <div className="flex items-center gap-3 border-r border-gray-300 pr-6 mr-2">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`${viewMode === "grid" ? "text-black" : "text-[#999]"} hover:text-black transition-colors`}
                            >
                                <HiViewGrid size={22} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`${viewMode === "list" ? "text-black" : "text-[#999]"} hover:text-black transition-colors`}
                            >
                                <HiViewList size={22} />
                            </button>
                        </div>

                        {/* Dropdown */}
                        <div className="relative group">
                            <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] text-[#222] focus:outline-none cursor-pointer hover:border-black transition-all rounded-md">
                                <option>Featured</option>
                                <option>Best Selling</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#666]">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <section className="py-12 px-4 md:px-12 max-w-[1600px] mx-auto">
                <div className={`${viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12"
                    : "grid grid-cols-1 gap-y-6 max-w-4xl mx-auto"
                    }`}>
                    {displayProducts.map((product, index) => (
                        <Cards
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            discount={product.discount}
                            colors={product.colors}
                            viewMode={viewMode}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CategoryPage;
