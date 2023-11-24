import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import amiry from '../../Websites/Components/Images/amirysvehla.png';
import wedding from '../../Websites/Components/Images/wedding.png';
import arya from '../../Websites/Components/Images/arya.png';
import ramen from '../../Websites/Components/Images/ramen.png';

function Image() {
    const container = {
        width: '60vw',
        height: '60vh',
        color: 'white',
    };

    const imageStyle = {
        maxHeight: '60vh',
        maxWidth: '60vw',
    };

    const titleStyle = {
        textAlign: 'left', // Align the title to the left
        fontSize: '.5rem',
        margin: '0',
        paddingLeft: '10px', // Add some left padding for better positioning
    };

    const images = [wedding, amiry, arya, ramen];
    const titles = ["001 - Wedding RSVP", "002 - amirysvehla.com.au", "003 - Arya Handyman", "004 - Manpuku"];

    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return (
        <div style={container}>
            <h1 style={titleStyle}>{titles[currentImage]}</h1>
            <Carousel showThumbs={false} onChange={handleImageChange}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={titles[index]} style={imageStyle} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Image;
