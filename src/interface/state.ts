import { AuthSliceState, RegistSliceState } from "./auth";
import { ToastSliceState } from "./toast";
import { ProfileSliceState } from "./user";
import { BalanceSliceState } from "./balance";
import { ServicesSliceState } from "./services";
import { BannersSliceState } from "./banners";

export interface sliceState {
  auth: AuthSliceState;
  toast: ToastSliceState;
  regist: RegistSliceState;
  user: ProfileSliceState;
  balance: BalanceSliceState;
  services: ServicesSliceState;
  banners: BannersSliceState;
}
