import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  mode: "dark",
};

const themeModeSlice = createSlice({
  name: "theme",
  initialState: INITAL_STATE,

  reducers: {
    changeMode: (state) => {
      state.mode === "dark" ? (state.mode = "light") : (state.mode = "dark");
    },
  },
});

export const { changeMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
