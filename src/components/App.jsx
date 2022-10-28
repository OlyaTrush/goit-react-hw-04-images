import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { getImages } from '../API/api';
import { mapperImages } from '../helpers/mapper';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    imageQuery: '',
    bigImage: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, imageQuery } = this.state;

    if (prevState.page !== page || prevState.imageQuery !== imageQuery) {
      if (prevState.imageQuery !== imageQuery) {
        this.setState({ page: 1 });
      }
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ isLoading: true });

    getImages(this.state.imageQuery, this.state.page)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...mapperImages(res.data.hits)],
        }));
        if (res.data.hits.length === 0) {
          return toast.error('Type something carefully');
        }
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleFormSubmit = imageQuery => {
    this.setState(() => ({ imageQuery: imageQuery, images: [] }));
    this.setState({ page: 1 });
  };

  showMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  closeModal = () => {
    this.setState({ bigImage: '' });
  };

  setCurrentImage = url => {
    this.setState({ bigImage: url });
  };

  render() {
    const { images, bigImage, isLoading } = this.state;

    return (
      <DivStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            setCurrentImage={this.setCurrentImage}
          />
        )}
        {isLoading && <Loader />}
        {images.length > 0 && <Button handleClick={this.showMoreImages} />}
        {bigImage && <Modal image={bigImage} closeModal={this.closeModal} />}
      </DivStyled>
    );
  }
}

export { App };

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
