import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetchShops from '../store/shops/actions';
import ShopCard from './ShopCard';

const Container = styled.div`
      display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

class ShopList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShops());
  }

  render() {
    const { shops } = this.props;
    return (
      <Container>
        {shops.map((shop, index) => (
          <ShopCard key={index} shop={shop} />
        ))}
      </Container>
    );
  }
}

ShopList.propTypes = {
  shops: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { shops } = state;
  return shops;
};
export default connect(mapStateToProps)(ShopList);
