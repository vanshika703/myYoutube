import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
      console.log("toggled state in action");
    },
  },
});

export const { toggleMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
