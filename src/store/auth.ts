import { loginUser } from "@/services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "@/services/baseService";
import { authSliceState, loginResponse } from "@/interface/auth";
import { Inputs } from "@/components/modules/LoginForm/LoginForm";

const initialState: authSliceState = {
  isLogin: false,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk<loginResponse, Inputs>(
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
        console.log(action);
        state.loading = state.isLogin = false;
        state.error = action.payload as loginResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
