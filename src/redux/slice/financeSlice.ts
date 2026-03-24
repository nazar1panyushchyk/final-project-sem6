import { createSlice } from "@reduxjs/toolkit";
import type {
  FinanceState,
  NewTransaction,
} from "../../components/FinanceState/financeState";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: FinanceState = { balance: 0, transactions: [] };

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    addTransaction(state, action: PayloadAction<NewTransaction>) {
      const newTransaction = action.payload;
      const transaction = {
        ...newTransaction,
        id: crypto.randomUUID(),
      };
      state.transactions.push(transaction);
      if (transaction.type === "expense") {
        state.balance -= transaction.amount;
      } else {
        state.balance += transaction.amount;
      }
    },
    deleteTransaction(state, action: PayloadAction<string>) {
      const id = action.payload;
      const transactionToDelete = state.transactions.find((t) => t.id === id);
      if (!transactionToDelete) return;
      if (transactionToDelete.type === "expense") {
        state.balance += transactionToDelete.amount;
      } else {
        state.balance -= transactionToDelete.amount;
      }
      state.transactions = state.transactions.filter((t) => t.id !== id);
    },
  },
});

export const { setBalance, addTransaction, deleteTransaction } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
