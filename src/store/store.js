import { configureStore } from "@reduxjs/toolkit";
import themeModeSlice from "./slice/theme";
import watchLishSlice from "./slice/watchList";

export default configureStore({
  reducer: {
    themeMode: themeModeSlice,
    watchList: watchLishSlice,
  },
});
