import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyImg from './LazyImg';

const Card = styled.div`
  display: flex;
  flex-direction: row
  width: 100;
  height: auto;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 15px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 20px
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardLabel = styled.div`
  line-height: 23px;
  font-size: ${props => props.fontSize || '14px'};
  padding-top: ${props => props.paddingTop || 'auto'};
  color: ${props => props.color || '#000000'};
`;

const toRight = {
  marginLeft: 'auto',
  order: 2,
};

const ShopCard = (props) => {
  const { shop } = props;
  return (
    <Card>
      <CardImage>
        <LazyImg src={shop.logo} name={shop.name} />
      </CardImage>
      <CardContent>
        <CardLabel fontSize="22px"><b>{shop.name}</b></CardLabel>
        <CardLabel paddingTop="2px">
          {`${shop.area} (${shop.city})`}
        </CardLabel>
        <CardLabel fontSize="12px" paddingTop="2px">
          {`Tiempo estimado ${shop.deliveryTimeMinMinutes}-${shop.deliveryTimeMaxMinutes} mins`}
        </CardLabel>
        { shop.discount > 0
        && (
        <CardLabel fontSize="14px" paddingTop="2px" color="#589442">
          <b>{`${shop.discount}% OFF`}</b>
        </CardLabel>
        )
        }
      </CardContent>
      <CardContent style={toRight}>
        <CardLabel fontSize="20px" color="#589442">
          <b>{shop.rating}</b>
        </CardLabel>
      </CardContent>
    </Card>
  );
};

ShopCard.propTypes = {
  shop: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ShopCard;
