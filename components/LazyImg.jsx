import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const styleImg = {
  objectFit: 'cover',
  borderRadius: '0.25rem',
};

const LazyImg = ({ src, name }) => (
  <LazyLoad>
    <img src={src} alt={name} style={styleImg} width={100} height={100} />
  </LazyLoad>
);

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LazyImg;
