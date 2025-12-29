import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

import SearchResults from "./pages/SearchResults";

import Home from "./pages/Home";
import Clearance from "./pages/Clearance";
import NewArrivals from "./pages/NewArrivals";
import CategoryPage from "./pages/CategoryPage";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

//  IMPORT AUTH PAGES
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

// FOOTER PAGES
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import TermsConditions from "./pages/TermsConditions";
import ShippingDelivery from "./pages/ShippingDelivery";
import TrackOrder from "./pages/TrackOrder";
import ReturnsExchange from "./pages/ReturnsExchange";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />

        <Routes>
          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* MAIN ROUTES */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/" element={<Home />} />

          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/new-arrivals/:category" element={<CategoryPage section="New Arrivals" baseRoute="/new-arrivals" />} />

          <Route path="/clearance" element={<Clearance />} />
          <Route path="/clearance/:category" element={<CategoryPage section="Clearance" baseRoute="/clearance" />} />

          <Route path="/women" element={<Women />} />
          <Route path="/women/:category" element={<CategoryPage section="Women" baseRoute="/women" />} />

          <Route path="/men" element={<Men />} />
          <Route path="/men/:category" element={<CategoryPage section="Men" baseRoute="/men" />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* FOOTER ROUTES */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping-delivery" element={<ShippingDelivery />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/returns-exchange" element={<ReturnsExchange />} />

          {/* FALLBACK */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
