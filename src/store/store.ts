import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import registReducer from "./regist";
import toastReducer from "./toast";
import userReducer from "./user";
import balanceReducer from "./balance";
import servicesReducer from "./services";
import bannersReducer from "./banners";
import topupReducer from "./topup";
import purchaseReducer from "./purchase";

export default configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    regist: registReducer,
    user: userReducer,
    balance: balanceReducer,
    services: servicesReducer,
    banners: bannersReducer,
    topup: topupReducer,
    purchase: purchaseReducer,
  },
});
