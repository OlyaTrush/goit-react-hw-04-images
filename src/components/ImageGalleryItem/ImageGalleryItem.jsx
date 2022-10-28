import React from 'react';
import PropTypes from 'prop-types';
import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, setCurrentImage }) => (
  <LiStyled>
    <ImgStyled
      src={webformatURL}
      alt="something"
      onClick={() => setCurrentImage(largeImageURL)}
    />
  </LiStyled>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
