import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profile } from "@/services/userService";
import { ProfileResponse, ProfileSliceState } from "@/interface/user";

const initialState: ProfileSliceState = {
  loading: false,
  data: null,
  error: null,
};

export const profileAsync = createAsyncThunk<ProfileResponse>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    return await profile()
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(profileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(profileAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ProfileResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = profileSlice.actions;

export default profileSlice.reducer;
