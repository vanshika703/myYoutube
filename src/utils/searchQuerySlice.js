import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
    name:"searchQuery",
    initialState: {
        query: "",
    },
    reducers:{
        addQuery: (state,action) =>{
            state.query = action.payload;
        }
    }
})

export const {addQuery} = searchQuerySlice.actions;
export default searchQuerySlice.reducer;