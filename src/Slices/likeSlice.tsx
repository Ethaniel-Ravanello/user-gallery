import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: number;
}

interface LikeState {
  likePage: Movie[];
}

const storedLikes = sessionStorage.getItem("favorite");
const initialState: LikeState = {
  likePage: storedLikes ? JSON.parse(storedLikes) : [],
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
    deleteLike: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemIndex = state.likePage.findIndex((item) => item.id === itemId);

      if (itemIndex) {
        state.likePage.splice(itemIndex, 1);
      }
      sessionStorage.setItem("favorite", JSON.stringify(state.likePage));
    },
  },
});

export const { addLike, deleteLike } = likeSlice.actions;

export default likeSlice.reducer;
