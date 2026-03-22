import { configureStore } from "@reduxjs/toolkit";
import { transactionsReducer } from "../slice/financeSlice";

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    }
})