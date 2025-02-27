import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
