import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name : 'gpt',
    initialState : {
        showGPTsearch : false,
    },
    reducers : {
        toggleSearchBox : (state) =>
        {
            state.showGPTsearch = !state.showGPTsearch;
        },
    }
});

export const {toggleSearchBox}  = GPTslice.actions;

export default GPTslice.reducer;
