import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterShopsBy } from '../store/shops/actions';


const borderSelector = {
  borderColor: '#589442',
}
class PaymentDropdown extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    let { value } = event.target;
    if (value === 'Filtrar por') value = '';
    dispatch(filterShopsBy({ payment: value }));
  }

  render() {
    const { paymentsMethods } = this.props;
    return (
      <div className="field">
        <div className="control">
          <div className="select is-primary">
            <select style={borderSelector} onChange={this.handleInputChange}>
              <option>Filtrar por</option>
              {paymentsMethods.map((p, i) => <option key={`payment_${i}`}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

PaymentDropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
  paymentsMethods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  paymentsMethods: state.shops.paymentsMethods,
});

export default connect(mapStateToProps)(PaymentDropdown);
