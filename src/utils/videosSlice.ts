import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MovieVideosPayload {
  movieId: number;
  data: any;
}

interface VideosState {
  byMovieId: Record<number, any>;
}

const initialState: VideosState = {
  byMovieId: {},
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setMovieVideos(state, action: PayloadAction<MovieVideosPayload>) {
      const { movieId, data } = action.payload;
      state.byMovieId[movieId] = data;
    },
    clearMovieVideos(state, action: PayloadAction<number>) {
      const movieId = action.payload;
      delete state.byMovieId[movieId];
    },
  },
});

export const { setMovieVideos, clearMovieVideos } = videosSlice.actions;
export default videosSlice.reducer;
