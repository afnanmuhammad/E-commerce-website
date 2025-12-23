import React from 'react'
import womenImg from '../assets/images/16.png'
import menImg from '../assets/images/52.png'

const CategorySection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row bg-[#f5f5f5] overflow-hidden font-['Montserrat'] py-16 gap-6">
            {/* Women Category */}
            <div className='relative flex-1 aspect-[4/8] group cursor-pointer overflow-hidden'>
                <img
                    src={womenImg}
                    alt='Women'
                    className='w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105'
                />
                <div className='absolute top-5 left-0 w-full flex justify-center z-10'>
                    <h2 className='text-black text-[22px] md:text-[28px] font-bold tracking-[0.2em] uppercase'>
                        WOMEN
                    </h2>
                </div>
            </div>

            {/* Men Category */}
            <div className='relative flex-1 aspect-[4/8] group cursor-pointer overflow-hidden'>
                <img
                    src={menImg}
                    alt='Men'
                    className='w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105'
                />
                <div className='absolute top-4 left-0 w-full flex justify-center z-10'>
                    <h2 className='text-black text-[22px] md:text-[28px] font-bold tracking-[0.2em] uppercase'>
                        MEN
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default CategorySection
