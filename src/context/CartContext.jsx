import React, { createContext, useContext, useState, useEffect } from "react";
import { parsePrice } from "../utils/priceUtils";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    // Load initial cart from local storage if available
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save to local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id && item.color === product.color && item.size === product.size);

            if (existingItem) {
                // If item exists with same ID, color, and size, just increase quantity
                return prevItems.map((item) =>
                    item.id === product.id && item.color === product.color && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new item
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId, color, size) => {
        setCartItems((prevItems) => prevItems.filter((item) => !(item.id === itemId && item.color === color && item.size === size)));
    };

    const updateQuantity = (itemId, color, size, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === itemId && item.color === color && item.size === size) {
                    const newQuantity = item.quantity + amount;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + parsePrice(item.price) * item.quantity;
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
