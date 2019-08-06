import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortShopsBy } from '../store/shops/actions';


const borderSelector = {
  borderColor: '#589442',
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    let { value } = event.target;
    if (value === 'Ordenar por') value = '';
    dispatch(sortShopsBy({ type: value }));
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <div className="select">
            <select style={borderSelector} onChange={this.handleInputChange}>
              <option>Ordenar por</option>
              <option>Relevancia</option>
              <option>Tiempo de entrega</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


export default connect(() => ({}))(Dropdown);
