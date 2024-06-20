import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "../data";
import "./Gallery.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="gallery">
      <h1 className="gallery-head">Gallery</h1>
      <PhotoAlbum
        layout="masonry"
        photos={images.map((img, index) => ({ ...img, key: index, index }))}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          return 3;
        }}
        renderPhoto={({ photo, layout }) => (
          <div
            key={photo.key}
            className="image-container"
            style={{
              ...layout,
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
            onClick={() => handleClick(photo.index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
      />
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
