import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BalanceResponse, BalanceSliceState } from "@/interface/balance";
import { balance } from "@/services/balanceServicec";

const initialState: BalanceSliceState = {
  isVisibleSaldo: false,
  loading: false,
  balance: 0,
  error: null,
};

export const balanceAsync = createAsyncThunk<BalanceResponse>(
  "balance/fetchBalance",
  async (_, { rejectWithValue }) => {
    return await balance()
      .then((response) => response)
      .catch((error) => {
        return rejectWithValue(error.response.data);
      });
  }
);

export const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setVisible(state, action) {
      state.isVisibleSaldo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(balanceAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(balanceAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload.data?.balance || 0;
      })
      .addCase(balanceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as BalanceResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setVisible } = balanceSlice.actions;

export default balanceSlice.reducer;
