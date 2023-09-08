import { loginUser } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/services/baseService";
import {
  AuthSliceState,
  LoginInputsForm,
  LoginResponse,
} from "@/interface/auth";

const initialState: AuthSliceState = {
  isLogin: false,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk<LoginResponse, LoginInputsForm>(
  "auth/fetchLogin",
  async (payload, { rejectWithValue }) => {
    return await loginUser(payload)
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLogin = false;
      delete http.defaults.headers.common.Authorization;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLogin = true;
        state.loading = false;
        http.defaults.headers.common.Authorization =
          "JWT " + action.payload?.data?.token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = state.isLogin = false;
        state.error = action.payload as LoginResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
