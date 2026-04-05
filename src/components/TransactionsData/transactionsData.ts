import type { TransactionsProps } from "../TransactionsTypes/transactionsTypes";

export const expenseData: TransactionsProps = {
  description: "Опис товару",
  category: "Категорія товару",
  summary: [
    { id: 1, month: "ЛИСТОПАД", amount: "10 000.00" },
    { id: 2, month: "ЖОВТЕНЬ", amount: "30 000.00" },
    { id: 3, month: "ВЕРЕСЕНЬ", amount: "10 000.00" },
    { id: 4, month: "СЕРПЕНЬ", amount: "10 000.00" },
    { id: 5, month: "ЛИПЕНЬ", amount: "10 000.00" },
    { id: 6, month: "ЧЕРВЕНЬ", amount: "10 000.00" },
  ],
};

export const incomeData: TransactionsProps = {
  description: "Опис прибутку",
  category: "Категорія прибутку",
  summary: [
    { id: 1, month: "ЛИСТОПАД", amount: "25 500.00" },
    { id: 2, month: "ЖОВТЕНЬ", amount: "25 500.00" },
    { id: 3, month: "ВЕРЕСЕНЬ", amount: "25 500.00" },
    { id: 4, month: "СЕРПЕНЬ", amount: "20 000.00" },
    { id: 5, month: "ЛИПЕНЬ", amount: "20 000.00" },
    { id: 6, month: "ЧЕРВЕНЬ", amount: "18 000.00" },
  ],
};
