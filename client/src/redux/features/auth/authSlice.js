import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const { isLoggedIn } = authSlice.actions;

export default authSlice.reducer;
