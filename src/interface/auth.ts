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

export interface loginInputsForm {
  email: string;
  password: string;
}

export interface registResponse {
  status: number;
  message: string;
  data: null;
}

export interface registSliceState {
  loading: boolean;
  data: null | loginResponse;
  error?: null | loginResponse;
}

export interface registInputForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_konfirm: string;
}
