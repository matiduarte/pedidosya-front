
import React from 'react';
import styled from 'styled-components';
import ShopList from '../components/ShopList';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;


export default () => (
  <div>
    <SearchBar />
    <Container>
      <ShopList />
    </Container>
  </div>
);
