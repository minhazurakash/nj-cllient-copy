import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
import React from 'react';
// import './ImageGallery.css';

const fetchImages = async () => {
  const response = await axios.get('https://api.websitesprofessional.com/api/v1/Project');
  return response.data.map((image) => ({
    id: image.id,
    imgUrl: image.img,
    title: image.title,
  }));
};

const ImageGallery2 = () => {
  const {data } = useQuery('images', fetchImages);

  const generateColumns = (items, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    items.forEach((item, index) => columns[index % numColumns].push(item));
    return columns;
  };

  const openLightbox = (index) => {
    Lightbox.option({
      albumLabel: 'Image %1 of %2',
      fadeDuration: 200,
      imageFadeDuration: 200,
      resizeDuration: 200,
      wrapAround: true,
      alwaysShowNavOnTouchDevices: true,
      showImageNumberLabel: true,
      enableKeyboardNavigation: true,
    });
    Lightbox.init();
    Lightbox.start(data, index);
  };



  const columns = generateColumns(data, 4);

  return (
    <div className="image-gallery">
      <h2 className="image-gallery-title">Our Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((photo, index) => (
          <a
            href={photo.imgUrl}
            data-lightbox="gallery"
            data-title={photo.title}
            key={photo.id}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-image-container">
              <img src={photo.imgUrl} alt={photo.title} className="gallery-image" />
              <div className="gallery-overlay" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery2;
