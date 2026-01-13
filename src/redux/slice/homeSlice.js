import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* API CALL */
export const fetchHomeNews = createAsyncThunk(
  "home/fetchHomeNews",
  async () => {
    const response = await axios.get(
      "https://news-server.ubautomation.com/api/v1/home"
    );
    return response.data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
