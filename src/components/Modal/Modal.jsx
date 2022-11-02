import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { DivBackdropStyled, DivModalStyled } from './Modal.styled';

export function Modal({ image, closeModal }) {
  useEffect(() => {
    const handleClickByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleClickByEsc);

    return () => {
      window.removeEventListener('keydown', handleClickByEsc);
    };
  }, [closeModal]);

  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <DivBackdropStyled onClick={backdropClick}>
      <DivModalStyled>
        <img src={image} alt="something" />
      </DivModalStyled>
    </DivBackdropStyled>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};