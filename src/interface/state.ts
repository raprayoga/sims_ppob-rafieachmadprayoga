import { AuthSliceState, RegistSliceState } from "./auth";
import { ToastSliceState } from "./toast";
import { ProfileSliceState } from "./user";
import { BalanceSliceState } from "./balance";
import { ServicesSliceState } from "./services";
import { BannersSliceState } from "./banners";
import { TopupSliceState } from "./topup";
import { PurchaseSliceState } from "./purchase";
import { TransactionsSliceState } from "./transactions";

export interface sliceState {
  auth: AuthSliceState;
  toast: ToastSliceState;
  regist: RegistSliceState;
  user: ProfileSliceState;
  balance: BalanceSliceState;
  services: ServicesSliceState;
  banners: BannersSliceState;
  topup: TopupSliceState;
  purchase: PurchaseSliceState;
  transactions: TransactionsSliceState;
}
