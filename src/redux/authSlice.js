import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./authOperations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.user = action.payload.users;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = slice.reducer;
