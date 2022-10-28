import React from 'react';
import PropTypes from 'prop-types';
import { UlStyled } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, setCurrentImage }) => {
  return (
    <UlStyled>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          setCurrentImage={setCurrentImage}
        />
      ))}
    </UlStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ImageGallery;
