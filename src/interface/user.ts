interface User {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
}

export interface ProfileResponse {
  status: number;
  message: string;
  data: null | User;
}

export interface ProfileSliceState {
  successFetch: boolean;
  loading: boolean;
  data: null | ProfileResponse;
  error?: null | ProfileResponse;
}

export interface UserEditInputForm {
  first_name: string;
  last_name: string;
}
