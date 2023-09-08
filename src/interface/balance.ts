export interface Balance {
  balance: number;
}

export interface BalanceResponse {
  status: number;
  message: string;
  data: null | Balance;
}

export interface BalanceSliceState {
  isVisibleSaldo: boolean;
  loading: boolean;
  balance: number;
  error?: null | BalanceResponse;
}
