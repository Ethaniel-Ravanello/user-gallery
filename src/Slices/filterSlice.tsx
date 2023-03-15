import { createSlice } from "@reduxjs/toolkit";
import { filter } from "lodash";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filterSearch",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
