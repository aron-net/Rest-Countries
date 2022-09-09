import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchCountries from '../API/CountryApi';

const GET_COUNTRIES = 'GET_COUNTRIES';
const FETCH_COUNTRY = 'FETCH_COUNTRY';
const initialState = [];

export const getCountries = createAsyncThunk(GET_COUNTRIES, async (name) => {
  const res = await axios.get(fetchCountries);
  return res.data.filter(
    (country) => (
      country.region === name
        ? country : country.subregion === name),
  );
});

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES/fulfilled':
      return action.payload;
    case FETCH_COUNTRY:
      return state.filter((country) => country.name.common === action.payload);
    default:
      return state;
  }
};

export const countryDetails = (name) => ({
  type: FETCH_COUNTRY,
  payload: name,
});
