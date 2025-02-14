import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFetch } from "./videosAPI";

const initialState = {
  isLoading: false,
  isError: false,
  videos: [],
  error: "",
};

// create async
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const vidoes = await getFetch();
  return vidoes;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;
