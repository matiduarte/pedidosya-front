
import React from 'react';
import styled from 'styled-components';
import ShopList from '../components/ShopList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';


const PageContent = styled.div`
    padding-left: 1rem
    padding-right: 1rem;
    margin: auto;
    max-width: 64rem;
`;

export default () => (
  <div>
    <SearchBar />
    <Filters />
    <PageContent>
      <ShopList />
    </PageContent>
  </div>
);
