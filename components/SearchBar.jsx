import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import fetchShops from '../store/shops/actions';

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
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Shop finder
            </h1>
            <div className="field gnomes-search-field columns">
              <div className="control column">
                <input
                  aria-label="search-input"
                  className="input is-primary is-rounded"
                  type="text"
                  placeholder="search shop by name"
                  onChange={this.changeQuery.bind(this)}
                  value={value}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Searchbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(Searchbar);
