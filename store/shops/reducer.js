import {
  FETCH_SHOPS_BEGIN,
  FETCH_SHOPS_SUCCESS,
  SORT_SHOPS,
  FILTER_SHOPS,
} from './actions';

const initialState = {
  items: [],
  filteredItems: [],
  paymentsMethods: [],
};

function doSort(state, action) {
  const { type } = action.payload;
  const filteredItems = (type !== '')
    ? state.items.sort((a, b) => b.rating - a.rating)
    : state.items;
  console.log(filteredItems);
  return {
    ...state,
    filteredItems,
  };
}

function doFilter(state, action) {
  const { payment } = action.payload;
  const filteredItems = (payment !== '')
    ? state.items.filter(shop => shop.paymentMethods.includes(payment))
    : state.items;
  return {
    ...state,
    filteredItems,
  };
}

function getPaymentMethods(items) {
  const arrayPay = [];
  items.forEach(i => i.paymentMethods.forEach(p => arrayPay.push(p)));
  arrayPay.sort();
  return [...new Set(arrayPay)];
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
        items: action.payload.items,
        filteredItems: action.payload.items,
        paymentsMethods: getPaymentMethods(action.payload.items),
      };
    case SORT_SHOPS:
      return doSort(state, action);
    case FILTER_SHOPS:
      return doFilter(state, action);
    default:
      return state;
  }
};
