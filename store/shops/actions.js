import request from '../../utils/ajax';

export const FETCH_SHOPS_BEGIN = 'FETCH_SHOPS_BEGIN';
export const FETCH_SHOPS_SUCCESS = 'FETCH_SHOPS_SUCCESS';
export const SORT_SHOPS = 'SORT_SHOPS';

const fetchShopsBegin = () => ({
  type: FETCH_SHOPS_BEGIN,
});

const fetchShopsSuccess = items => ({
  type: FETCH_SHOPS_SUCCESS,
  payload: { items },
});

const sortShops = payload => ({
  type: SORT_SHOPS,
  payload,
});

export function sortShopsBy({ type }) {
  return dispatch => dispatch(sortShops({ type }));
}

export default function fetchShops(name = '') {
  return (dispatch) => {
    dispatch(fetchShopsBegin());
    return request('GET', `shops?query=${name}`)
      .then(({ data }) => {
        const { shops } = data;
        dispatch(fetchShopsSuccess(shops));
        return shops;
      });
  };
}
