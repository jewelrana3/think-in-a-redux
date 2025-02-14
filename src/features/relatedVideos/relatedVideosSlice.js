import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
  isLoading: false,
  isError: false,
  relatedVideos: [],
  error: "",
};

// create async
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    console.log({ tags, id });
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
  }
);

console.log({ fetchRelatedVideos });

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
