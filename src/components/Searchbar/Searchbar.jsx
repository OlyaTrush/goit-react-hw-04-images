import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HeaderStyled,
  FormStyled,
  ButtonStyled,
  InputStyled,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    imageQuery: '',
  };

  handleQueryChange = e => {
    this.setState({ imageQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageQuery.trim() === '') {
      return toast.error('Type something');
    }

    this.props.onSubmit(this.state.imageQuery);
    this.setState({ imageQuery: '' });
    e.target.reset();
  };

  render() {
    return (
      <HeaderStyled>
        <FormStyled onSubmit={this.handleSubmit}>
          <ButtonStyled type="submit">
            <FiSearch />
          </ButtonStyled>

          <InputStyled
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </FormStyled>
      </HeaderStyled>
    );
  }
}
