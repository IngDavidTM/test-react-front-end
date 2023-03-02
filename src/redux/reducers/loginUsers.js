import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/login';
const POST_LOGIN = 'wheels_and_deals/login/POST_LOGIN';

const initailState = {
  token: null,
};

const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${POST_LOGIN}/fulfilled`:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case `${POST_LOGIN}/rejected`:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export const postLogin = createAsyncThunk(POST_LOGIN, async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
});

export default loginReducer;
