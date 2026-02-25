import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import videosReducer from "./videosSlice";
import netflixGptReducer from "./netflixGptSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    videos: videosReducer,
    netflixGpt: netflixGptReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
