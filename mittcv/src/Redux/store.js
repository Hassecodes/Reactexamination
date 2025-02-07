//store.js
import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeSlice";

export const store = configureStore({
  reducer: {
    like: likeReducer,
  },
});