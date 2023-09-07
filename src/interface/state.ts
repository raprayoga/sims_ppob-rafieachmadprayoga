import { authSliceState } from "./auth";
import { toastSliceState } from "./toast";

export interface sliceState {
  auth: authSliceState;
  toast: toastSliceState;
}
