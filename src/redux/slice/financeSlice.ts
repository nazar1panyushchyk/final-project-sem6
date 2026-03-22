import { createSlice } from "@reduxjs/toolkit";
import type { FinanceState } from "../../components/FinanceState/financeState";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FinanceState = { balance: 0, transactions: [] };

const transactionsSlice = createSlice({
    name: "finance",
    initialState,
    reducers: {
        setBalance(state, action: PayloadAction<number>) {
            state.balance = action.payload;
        },
        addTransaction(state, action) {
            state.transactions = action.payload;
        }
    }
});
 
export const transactionsReducer = transactionsSlice.reducer;