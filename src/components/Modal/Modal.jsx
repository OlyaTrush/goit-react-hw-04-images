import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DivBackdropStyled, DivModalStyled } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClickByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickByEsc);
  }

  handleClickByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  backdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <DivBackdropStyled onClick={this.backdropClick}>
        <DivModalStyled>
          <img src={image} alt="something" />
        </DivModalStyled>
      </DivBackdropStyled>
    );
  }
}
