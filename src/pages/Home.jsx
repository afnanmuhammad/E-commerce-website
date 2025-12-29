import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import CategorySection from "../components/CategorySection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

// old images (manual products – commented)
// import image1 from "../assets/images/1.jpeg";
// import image2 from "../assets/images/6.png";
// import image3 from "../assets/images/100.png";
// import image4 from "../assets/images/113.png";

const Home = () => {
  // ================= API PRODUCTS =================
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        console.log("Response:", response);

        const data = await response.json();
        console.log("All Data:", data);
        console.log("Products:", data.products);

        setProducts(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    productsData();
  }, []);

  // ================= MANUAL PRODUCTS (OLD CODE) =================
  /*
  const products = [
    {
      image: image1,
      title: "AUTUMN GLOW STRIPPED POLO SWEATER - BROWN",
      price: "Rs.5,960.00",
      oldPrice: "Rs.7,950.00",
      discount: "-25%",
    },
    {
      image: image2,
      title: "QUARTER ZIP SWEATER - ASH GRAY",
      price: "Rs.6,450.00",
    },
    {
      image: image3,
      title: "COCOA SOFT KNIT CARDIGAN - BROWN",
      price: "Rs.5,960.00",
      oldPrice: "Rs.7,950.00",
      discount: "-25%",
    },
    {
      image: image4,
      title: "CLASSIC QUARTER ZIP SWEATSHIRT - BROWN",
      price: "Rs.5,450.00",
    },
  ];
  */

  return (
    <div className="w-full bg-[#f5f5f5] relative min-h-screen overflow-x-hidden">
      <Hero />

      {/* ================= PRODUCTS SECTION ================= */}
      <section className="py-12 px-4 md:px-12 max-w-[1600px] mx-auto relative">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-2 uppercase text-center">
            MINIMAL CORE
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#666] font-light text-center">
            Tailored to keep you cozy this winter season!
          </p>
        </div>

        <div className="relative group/carousel">
          {/* Left Arrow */}
          {/* <button className="absolute -left-5 md:left-[-50px] top-[35%] -translate-y-1/2 text-[#333] hover:text-black transition-all z-30 opacity-60 hover:opacity-100 hidden sm:block">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button> */}

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 ">
            {products.map((product) => (
              <Cards
                key={product.id}
                image={product.thumbnail}
                title={product.title}
                price={`Rs. ${product.price}`}
                oldPrice={
                  product.discountPercentage
                    ? `-${product.discountPercentage}%`
                    : ""
                }
                discount={
                  product.discountPercentage
                    ? `${product.discountPercentage}% OFF`
                    : ""
                }
                className={"border border-gray-200 px-2"}
              />
            ))}
          </div>

          {/* Right Arrow */}
          {/* <button className="absolute -right-5 md:right-[-50px] top-[35%] -translate-y-1/2 text-[#333] hover:text-black transition-all z-30 opacity-60 hover:opacity-100 hidden sm:block">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button> */}
        </div>
      </section>

      <CategorySection />
      <Testimonials />
      <Footer />

      {/* Back to Top */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <FaArrowUp size={16} className="text-[#333]" />
        </button>
      </div>
    </div>
  );
};

export default Home;
