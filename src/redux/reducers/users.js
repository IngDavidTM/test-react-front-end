import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/users';
const POST_USER = 'wheels_and_deals/users/POST_USER';

const initailState = {
  message: null,
  created: false,
};

const usersReducer = (state = initailState, action) => {
  switch (action.type) {
    case `${POST_USER}/fulfilled`:
      return {
        ...state,
        message: 'Your account has been created',
        created: true,
      };
    case `${POST_USER}/rejected`:
      return {
        ...state,
        message: `${Object.keys(action.payload)[0] + action.payload.name}`,
        conected: false,
      };
    default:
      return state;
  }
};

export const postUser = createAsyncThunk(POST_USER, async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
});

export default usersReducer;
