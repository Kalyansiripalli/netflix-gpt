import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import videosReducer from "./videosSlice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    videos: videosReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
