import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    setToggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { setToggleMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
