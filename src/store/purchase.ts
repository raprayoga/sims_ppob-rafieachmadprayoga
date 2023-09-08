import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PurchaseInputForm,
  PurchaseResponse,
  PurchaseSliceState,
} from "@/interface/purchase";
import { purchase } from "@/services/purchaseService";

const initialState: PurchaseSliceState = {
  loading: false,
  data: null,
  error: null,
};

export const purchaseAsync = createAsyncThunk<
  PurchaseResponse,
  PurchaseInputForm
>("purchase/fetchPurchase", async (payload, { rejectWithValue }) => {
  return await purchase(payload)
    .then((response) => response)
    .catch((error) => {
      return rejectWithValue(error.response.data);
    });
});

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    resetPurchase(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(purchaseAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(purchaseAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(purchaseAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as PurchaseResponse;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
