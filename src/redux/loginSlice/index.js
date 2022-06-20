import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: null
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState
});

const { reducer: loginReducer } = loginSlice;

export default loginReducer;
