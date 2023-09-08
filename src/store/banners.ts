import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BannersResponse, BannersSliceState } from "@/interface/banners";
import { banners } from "@/services/bannersService";

const initialState: BannersSliceState = {
  loading: false,
  data: [],
  error: null,
};

export const bannersAsync = createAsyncThunk<BannersResponse>(
  "banners/fetchServices",
  async (_, { rejectWithValue }) => {
    return await banners()
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const bannersSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bannersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(bannersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(bannersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as BannersResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = bannersSlice.actions;

export default bannersSlice.reducer;
