import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/reservations';
const DELETE_RESERVATION = 'wheels_and_deals/reservations/DELETE_RESERVATION';

const initailState = [];

const reservationReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${DELETE_RESERVATION}/fulfilled`:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};

export const deleteReservation = createAsyncThunk(DELETE_RESERVATION, async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

export default reservationReducer;
