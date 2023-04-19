import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import toggleSlice from "./toggleSlice";
import searchQuerySlice from "./searchQuerySlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    chat: chatSlice,
    searchQuery: searchQuerySlice,
  },
});

export default store;
