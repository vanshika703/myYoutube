import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import toggleSlice from "./toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
  },
});

export default store;
