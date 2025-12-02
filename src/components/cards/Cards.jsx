import React from 'react'

const Cards = ({ image, title, price }) => {
    return (
        <div className='w-60 bg-white rounded-xl shadow-md p-4'>
            {/* Cards Component */}
            <img src={image} alt="title" className="rounded-lg h-40 w-full object-cover" />
            <h2 className="text-lg font-semibold mt-3">{title}</h2>
            <span className="text-gray-600 mt-1">{price}</span>

        </div>
    )
}

export default Cards