import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  TransactionInputForm,
  TransactionResponse,
  TransactionsSliceState,
} from "@/interface/transactions";
import { transactions } from "@/services/transactionsService";
import Router from "next/router";

const initialState: TransactionsSliceState = {
  isShowLoadMore: true,
  loading: false,
  data: [],
  error: null,
};

export const transactionsAsync = createAsyncThunk<
  TransactionResponse,
  TransactionInputForm
>("transactions/fetchTransactions", async (payload, { rejectWithValue }) => {
  return await transactions(payload)
    .then((response) => response)
    .catch((error) => {
      if (error.response.status === 401) Router.push("/login");
      return rejectWithValue(error.response.data);
    });
});

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    resetTransaction(state) {
      state.data = [];
      state.isShowLoadMore = true;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(transactionsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(transactionsAsync.fulfilled, (state, action) => {
        state.loading = false;
        const prevData = [...state.data];
        state.data = prevData.concat(action.payload.data.records);
        if (action.payload.data.records.length === 0)
          state.isShowLoadMore = false;
      })
      .addCase(transactionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as TransactionResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
