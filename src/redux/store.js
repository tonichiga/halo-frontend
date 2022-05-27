import { configureStore } from "@reduxjs/toolkit";
import { stockReducers } from "./stock";

export const store = configureStore({
  reducer: {
    stock: stockReducers,
  },
});
