import React from 'react'

const Testimonials = () => {
    const reviews = [
        {
            name: 'Shazia Saiiad',
            image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&auto=format&fit=crop',
            stars: 5,
            title: 'Good quality shirt excellent',
            content: 'The shirt is excellent in terms of both design and fabric. We will definitely be buying more.'
        },
        {
            name: 'haneeah',
            image: null,
            stars: 5,
            title: '',
            content: "the quality of their burgundy skirt is SUPERB, it's not see through at all, neat stitching and the sizing is even better, perfection ! ❤️"
        },
        {
            name: 'Hamzah Waseem',
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&auto=format&fit=crop',
            stars: 5,
            title: 'Zipe Sweatshirt-Brown Reivew',
            content: "The Product was good and size also, I'm 6ft tall, so the length of product is really matter to me, so amazingly all the measurements came into fit position."
        }
    ]

    return (
        <section className="w-full bg-[#f2f2f2] py-10 px-4 md:px-12 font-['Montserrat']">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-20">
                    <h2 className="text-[22px] md:text-[24px] font-medium text-[#222] mb-3">
                        Let customers speak for us
                    </h2>
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="black"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-[15px] text-[#444]">
                        <span>from 603 reviews</span>
                        <div className="w-5 h-5 bg-[#4cc3b4] rounded-sm flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <div className="flex gap-5 mb-auto">
                                {review.image && (
                                    <div className="w-[110px] h-[140px] shrink-0 overflow-hidden">
                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="flex gap-0.5 mb-2.5">
                                        {[...Array(review.stars)].map((_, i) => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="black"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        ))}
                                    </div>
                                    {review.title && (
                                        <h4 className="text-[16px] font-bold text-[#1a1a1a] mb-1.5 leading-tight">
                                            {review.title}
                                        </h4>
                                    )}
                                    <p className="text-[14px] text-[#333] font-normal leading-[1.6]">
                                        {review.content}
                                    </p>
                                </div>
                            </div>
                            <div className={`mt-6 ${review.image ? 'ml-[130px]' : ''}`}>
                                <h5 className="text-[16px] font-bold text-[#1a1a1a]">
                                    {review.name}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-8 mt-20">
                    <button className="text-[#ccc] hover:text-[#222] transition-colors p-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button className="text-[#ccc] hover:text-[#222] transition-colors p-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
