import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  list: [],
};

const watchLishSlice = createSlice({
  name: "theme",
  initialState: INITAL_STATE,

  reducers: {
    setWatchList: (state, action) => {
      state.list = action.payload;
    },
    addToWatchList: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromWatchList: (state, action) => {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addToWatchList, removeFromWatchList, setWatchList } =
  watchLishSlice.actions;

export default watchLishSlice.reducer;
