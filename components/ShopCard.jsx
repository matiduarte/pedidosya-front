import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyImg from './LazyImg';

const Card = styled.div`
  transition: 0.3s;
  display: flex;
  flex-direction: row
  padding: 10px;
  border-radius: 1px solid 5px;
  border-top: 1px solid #eee;
  `;

const Container = styled.div`
  width: 100%;
  padding: 2px 16px;
`;


class ShopCard extends Component {
  render() {
    const { shop } = this.props;
    return (
      <Card>
        <figure className="image">
          <LazyImg src={shop.logo} name={shop.name} />
        </figure>
        <Container>
          <h4><b>{shop.name}</b></h4>
          <p>Architect & Engineer</p>
        </Container>
      </Card>
    );
  }
}

ShopCard.propTypes = {
  shop: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShopCard;
