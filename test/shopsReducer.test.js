/* global test expect describe */

import reducer from '../store/shops/reducer';
import {
  FETCH_SHOPS_SUCCESS,
  FILTER_SHOPS,
} from '../store/shops/actions';

const initialState = {
  items: [],
  filteredItems: [],
  paymentsMethods: [],
};
const mockShop1 = {
  name: 'shop name',
  rating: '4',
  paymentMethods: [
    'Spreedly',
  ],
  deliveryTimeMinMinutes: '45',
  deliveryTimeMaxMinutes: '60',
};
const mockShop2 = {
  name: 'shop name 2',
  rating: '4.5',
  paymentMethods: [
    'Efectivo',
    'Visa',
    'Mastercard',
    'Visa Electron',
    'Visa',
    'Ticket Alimentación',
    'Sodexo (POS)',
    'OCA',
    'Tarjeta D',
  ],
  deliveryTimeMinMinutes: '15',
  deliveryTimeMaxMinutes: '30',
};

describe('SHOPS REDUCER', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should load results on FETCH_SHOPS_SUCCESS action', () => {
    expect(reducer(FETCH_SHOPS_SUCCESS, {
      type: FETCH_SHOPS_SUCCESS,
      payload: { items: [mockShop1, mockShop2] },
    }).items.length).toEqual(2);
  });

  test('should filter results on FILTER_SHOPS action', () => {
    expect(reducer({ ...initialState, items: [mockShop1, mockShop2] }, {
      type: FILTER_SHOPS,
      payload: { payment: 'Efectivo' },
    }).filteredItems.length).toEqual(1);
  });

});
