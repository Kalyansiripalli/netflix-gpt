import { createSlice } from "@reduxjs/toolkit";

const netflixGptSlice = createSlice({
  name: "netflixGpt",
  initialState: {
    showNetflixGptPage: false,
  },
  reducers: {
    toggleNetflixGptPage: (state) => {
      let currentState = state.showNetflixGptPage;
      state.showNetflixGptPage = !currentState;
    },
  },
});

export const { toggleNetflixGptPage } = netflixGptSlice.actions;

export default netflixGptSlice.reducer;
