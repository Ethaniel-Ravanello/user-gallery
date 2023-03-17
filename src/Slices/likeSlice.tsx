import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  id: number;
}

interface LikeState {
  likePage: Movie[];
}

const storedFavorite = sessionStorage.getItem("favorite");
const initialState: LikeState = {
  likePage: JSON.parse(sessionStorage.getItem("favorite")) || [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const newItem = action.payload;
      const existItem = state.likePage.find((item) => item.id === newItem.id);

      if (!existItem) {
        state.likePage.push(action.payload);
      }
      sessionStorage.setItem("favorite", JSON.stringify(state.likePage));
    },
  },
});

export const { addLike } = likeSlice.actions;

export default likeSlice.reducer;
