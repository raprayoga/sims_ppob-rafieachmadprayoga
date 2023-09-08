import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  TopupInputForm,
  TopupResponse,
  TopupSliceState,
} from "@/interface/topup";
import { topup } from "@/services/topupService";

const initialState: TopupSliceState = {
  loading: false,
  data: null,
  error: null,
};

export const topupAsync = createAsyncThunk<TopupResponse, TopupInputForm>(
  "topup/fetchTopup",
  async (payload, { rejectWithValue }) => {
    return await topup(payload)
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const topupSlice = createSlice({
  name: "topup",
  initialState,
  reducers: {
    resetTopup(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(topupAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(topupAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(topupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as TopupResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetTopup } = topupSlice.actions;

export default topupSlice.reducer;
