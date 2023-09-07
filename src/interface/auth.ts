export interface loginResponse {
  status: number;
  message: string;
  data: null | { token: string };
}

export interface authSliceState {
  isLogin: boolean;
  loading: boolean;
  error?: null | loginResponse;
}
