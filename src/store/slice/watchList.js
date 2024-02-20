import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  list: [],
};

const watchLishSlice = createSlice({
  name: "theme",
  initialState: INITAL_STATE,

  reducers: {
    addToWatchLis: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromWatchLis: (state, action) => {
      state.list = state.list.filter((id) => id !== action.payload);
    },
  },
});

export const { addToWatchLis, removeFromWatchLis } = watchLishSlice.actions;

export default watchLishSlice.reducer;
