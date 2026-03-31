import { configureStore } from "@reduxjs/toolkit";
import { financeReducer } from "../slice/financeSlice";
import { authReducer } from "../slice/authSlice";

export const store = configureStore({
    reducer: {
        finance: financeReducer,
        auth: authReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;