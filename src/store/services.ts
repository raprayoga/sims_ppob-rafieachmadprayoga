import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ServiceResponse, ServicesSliceState } from "@/interface/services";
import { services } from "@/services/servicesService";
import Router from "next/router";

const initialState: ServicesSliceState = {
  loading: false,
  data: [],
  error: null,
};

export const servicesAsync = createAsyncThunk<ServiceResponse>(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
    return await services()
      .then((response) => response)
      .catch((error) => {
        if (error.response.status === 401) Router.push("/login");
        return rejectWithValue(error.response.data);
      });
  }
);

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(servicesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(servicesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(servicesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ServiceResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = servicesSlice.actions;

export default servicesSlice.reducer;
