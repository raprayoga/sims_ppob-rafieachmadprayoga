import { regist } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  registResponse,
  registSliceState,
  registInputForm,
} from "@/interface/auth";

const initialState: registSliceState = {
  loading: false,
  data: null,
  error: null,
};

export const registAsync = createAsyncThunk<registResponse, registInputForm>(
  "auth/fetchRegis",
  async (payload, { rejectWithValue }) => {
    return await regist(payload)
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const registSlice = createSlice({
  name: "regist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(registAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as registResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = registSlice.actions;

export default registSlice.reducer;
