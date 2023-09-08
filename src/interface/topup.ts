export interface TopupResponse {
  status: number;
  message: string;
  data: {
    balance: number;
  };
}

export interface TopupSliceState {
  loading: boolean;
  data: null | TopupResponse;
  error?: null | TopupResponse;
}

export interface TopupInputForm {
  top_up_amount: number;
}
