import { createSlice } from "@reduxjs/toolkit";

const netflixGptSlice = createSlice({
  name: "netflixGpt",
  initialState: {
    showNetflixGptPage: false,
    gptMovieSuggestions: null,
    gptMovieSuggestionsDetails: null,
    loading: false, // track when GPT / TMDB requests are in flight
  },
  reducers: {
    toggleNetflixGptPage: (state) => {
      let currentState = state.showNetflixGptPage;
      state.showNetflixGptPage = !currentState;
    },
    addGptMovieSuggestions: (state, action) => {
      state.gptMovieSuggestions = action.payload;
    },
    addGptMovieSuggestionsDetails: (state, action) => {
      state.gptMovieSuggestionsDetails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  toggleNetflixGptPage,
  addGptMovieSuggestions,
  addGptMovieSuggestionsDetails,
  setLoading,
} = netflixGptSlice.actions;

export default netflixGptSlice.reducer;
