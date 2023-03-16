import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Slices/filterSlice";
import cartSlice from "./Slices/likeSlice";

export const store = configureStore({
  reducer: {
    userFilter: filterSlice,
    userLiked: cartSlice,
  },
});
