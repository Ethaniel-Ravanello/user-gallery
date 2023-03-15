import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";

export const store = configureStore({
  reducer: {
    userFilter: filterSlice,
  },
});
