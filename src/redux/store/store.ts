import { configureStore } from "@reduxjs/toolkit";
import { financeReducer } from "../slice/financeSlice";

export const store = configureStore({
    reducer: {
        finance: financeReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;