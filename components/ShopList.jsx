import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchShops from '../store/shops/actions';

class ShopList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchShops());
  }

  render() {
    const { shops } = this.props;
    return (
      <div>
        <ul>
          {shops.map(({ name }, index) => <li key={index}>{name}</li>)}
        </ul>
      </div>
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
