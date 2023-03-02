import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/createUsers';

const store = configureStore({
  reducer: {
    usersCreate: usersReducer,
  },
});

export default store;
