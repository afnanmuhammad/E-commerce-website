import React from 'react'
import Hero from '../components/hero/Hero'
import Cards from '../components/cards/Cards'

import image1 from '../assets/images/1.jpeg'
import image2 from '../assets/images/6.png'
import image3 from "../assets/images/100.png"
import image4 from "../assets/images/113.png"

const Home = () => {

    const cardsData = [
        { image: image1, title: 'Product 1', price: '$19.99' },
        { image: image2, title: 'Product 2', price: '$24.99' },
        { image: image3, title: 'Product 3', price: '$29.99' },
        { image: image4, title: 'Product 4', price: '$39.99' },
        { image: 'https://example.com/image1.jpg', title: 'Product 5', price: '$19.99' },
        { image: 'https://example.com/image1.jpg', title: 'Product 6', price: '$49.99' },
        { image: 'https://example.com/image1.jpg', title: 'Product 7', price: '$35.99' },
        { image: 'https://example.com/image1.jpg', title: 'Product 8', price: '$59.99' },
    ]

    return (
        <div className="w-full">

            <Hero />

            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {cardsData.map((card, index) => (
                    <Cards
                        key={index}
                        image={card.image}
                        title={card.title}
                        price={card.price}
                    />
                ))}
            </div>

        </div>
    )
}

export default Home
