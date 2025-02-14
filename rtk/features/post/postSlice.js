const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { fetchPostApi } = require("./postAPI");

const initialState = {
  loading: false,
  error: "",
  post: [],
};

// create async thunk
const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const post = await fetchPostApi();
  return post;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.post = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
      });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
