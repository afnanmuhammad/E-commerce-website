import React from 'react';
import backgroundImage from "../assets/images/54Banner.png";

const Hero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',        // cover full area
                backgroundPosition: 'center',   // center the image
                backgroundRepeat: 'no-repeat',  // avoid repeating
                width: '100%',                  // full width
                height: '100vh',                // full viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                position: 'relative'
            }}
        >


        </div>
    );
};

export default Hero;
