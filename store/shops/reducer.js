import {
  FETCH_SHOPS_BEGIN,
  FETCH_SHOPS_SUCCESS,
} from './actions';

const initialState = {
  shops: [],
  paymentFilters: [],
};

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
      };
    default:
      return state;
  }
};
