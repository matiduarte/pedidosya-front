import {
  FETCH_SHOPS_BEGIN,
  FETCH_SHOPS_SUCCESS,
  SORT_SHOPS,
} from './actions';

const initialState = {
  shops: [],
  paymentFilters: [],
  results: 0,
  selectedFilter: '',
};

function doSort(state, action) {
  const { type } = action.payload;
  const shops = [...state.shops];
  switch (type) {
    case 'Relevancia':
      return {
        ...state,
        shops: shops.sort((a, b) => b.rating - a.rating),
      };
    case 'Tiempo de entrega':
      return {
        ...state,
        shops: shops.sort((a, b) => a.deliveryTimeMinMinutes - b.deliveryTimeMinMinutes),
      };
    default:
      return state;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOPS_BEGIN:
      return {
        ...state,
      };
    case FETCH_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload.items,
        results: action.payload.items.length,
      };
    case SORT_SHOPS:
      return {
        ...state,
        selectedFilter: action.payload.type,
        shops: doSort(state, action),
      };
    default:
      return state;
  }
};
