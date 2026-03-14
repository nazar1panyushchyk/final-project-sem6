export type TransactionsProps = {
  description: string;
  category: string;
  categories: {
    value: string;
    label: string;
  }[];
  summary: {
    id: number;
    month: string;
    amount: string;
  }[];
};