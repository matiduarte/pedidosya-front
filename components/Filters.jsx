import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import PaymentDropdown from './PaymentDropdown';

const PageContent = styled.div`
    padding-left: 1rem
    padding-right: 1rem;
    margin: auto;
    max-width: 62rem;
    margin-top: 40px;
`;

const CustomHr = styled.hr`
    margin: 1.5rem 0 0.5rem 0;
    border: 0;
    border-top: 1px solid #e4e4e4
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PDiv = styled.p`
    font-size: 1rem;
    font-weight: normal;
    color: #3d4149;
    margin: 0;
`;

const Filters = (props) => {
  const { results } = props;
  return (
    <div>
      <PageContent>
        <FlexDiv>
          <PDiv>{`${results} restaurantes`}</PDiv>
          <PaymentDropdown />
          <Dropdown />
        </FlexDiv>
        <CustomHr />
      </PageContent>
    </div>
  );
};

Filters.propTypes = {
  results: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  results: state.shops.filteredItems.length,
});
export default connect(mapStateToProps)(Filters);
