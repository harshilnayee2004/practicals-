import React from 'react';
import './Gallery.css';

const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+6"
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h2>My Image Gallery</h2>
            <div className="image-grid">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Placeholder ${index + 1}`}
                        className="gallery-img"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
