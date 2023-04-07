import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import toggleSlice from "./toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    chat: chatSlice
  },
});

export default store;
