import { regist } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  RegistResponse,
  RegistSliceState,
  RegistInputForm,
} from "@/interface/auth";
import Router from "next/router";

const initialState: RegistSliceState = {
  loading: false,
  data: null,
  error: null,
};

export const registAsync = createAsyncThunk<RegistResponse, RegistInputForm>(
  "auth/fetchRegis",
  async (payload, { rejectWithValue }) => {
    return await regist(payload)
      .then((response) => response)
      .catch((error) => {
        if (error.response.status === 401) Router.push("/login");
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
        state.error = action.payload as RegistResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = registSlice.actions;

export default registSlice.reducer;
