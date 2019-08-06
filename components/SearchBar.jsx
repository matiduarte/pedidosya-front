import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { debounce } from 'throttle-debounce';
import fetchShops from '../store/shops/actions';

const HeaderBar = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    background-color: #589442;
    height: 85px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%
`;

const styleInputSearch = {
  width: '75%',
};

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.searchDebounce = debounce(500, this.search);
    this.state = {
      value: '',
    };
  }

  search(q) {
    this.handleInputChange(q);
  }

  changeQuery(event) {
    this.setState({ value: event.target.value }, () => {
      const { value } = this.state;
      this.searchDebounce(value);
    });
  }

  handleInputChange(value) {
    const { dispatch } = this.props;
    dispatch(fetchShops(encodeURIComponent(value)));
  }

  render() {
    const { value } = this.state;
    return (
      <HeaderBar>
        <FlexDiv>
          <input
            style={styleInputSearch}
            aria-label="search-input"
            className="input"
            type="text"
            placeholder="Busca restaurantes por nombre"
            onChange={this.changeQuery.bind(this)}
            value={value}
          />
        </FlexDiv>
      </HeaderBar>
    );
  }
}

Searchbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(Searchbar);
