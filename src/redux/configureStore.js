import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/createUsers';
import loginReducer from './reducers/loginUsers';

const store = configureStore({
  reducer: {
    usersCreate: usersReducer,
    loginUsers: loginReducer,
  },
});

export default store;
