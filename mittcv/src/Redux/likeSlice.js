//likeSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",
  initialState: {
    value: 0, // Startvärde på antalet gillningar
  },
  reducers: {
    incrementLike: (state) => {
      state.value += 1;
    },
  },
});

// Exportera actions och reducer
export const { incrementLike } = likeSlice.actions;
export default likeSlice.reducer;