export type TransactionType = "expense" | "income";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: TransactionType;
};

export type FinanceState = {
  balance: number;
  transactions: Transaction[];
};

export type NewTransaction = {
  date: string;
  description: string;
  category: string;
  amount: number;
  type: TransactionType;
}