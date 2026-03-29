import type { TransactionType } from "../../components/FinanceState/financeState";
import type { RootState } from "../store/store";

const MONTHS = [
  "СІЧЕНЬ",
  "ЛЮТИЙ",
  "БЕРЕЗЕНЬ",
  "КВІТЕНЬ",
  "ТРАВЕНЬ",
  "ЧЕРВЕНЬ",
  "ЛИПЕНЬ",
  "СЕРПЕНЬ",
  "ВЕРЕСЕНЬ",
  "ЖОВТЕНЬ",
  "ЛИСТОПАД",
  "ГРУДЕНЬ",
];

const parseTransactionDate = (date: string) => {
  const [day, month, year] = date.split(".");
  return {
    day: Number(day),
    month: Number(month),
    year: Number(year),
  };
};

export const selectSummaryByType = (type: TransactionType) => {
  return (state: RootState) => {
    const data = state.finance.transactions;
    const filtered = data.filter((t) => t.type === type);
    const summary = MONTHS.map((month) => ({
      month,
      amount: 0,
    }));

    const currentYear = new Date().getFullYear();

    filtered.forEach((transaction) => {
      const { month, year } = parseTransactionDate(transaction.date);
      if (year !== currentYear) return;
      const monthIndex = month - 1;
      summary[monthIndex].amount += transaction.amount;
      if (!summary[monthIndex]) return;
    });

    return summary;
  };
};

export const selectTotalByTypeAndPeriod =
  (type: TransactionType, month: number, year: number) =>
  (state: RootState) => {
    const data = state.finance.transactions;
    const filtered = data.filter((t) => {
      const { month: txMonth, year: txYear } = parseTransactionDate(t.date);
      return t.type === type && txMonth === month && txYear === year;
    });

    const total = filtered.reduce((acc, t) => acc + t.amount, 0);
    return total;
  };

type CategoryTotals = Record<string, number>;

export const selectCategoryTotalsByPeriod =
  (type: TransactionType, month: number, year: number) =>
  (state: RootState) => {
    const data = state.finance.transactions;
    const filtered = data.filter((t) => {
      const { month: txMonth, year: txYear } = parseTransactionDate(t.date);
      return t.type === type && txMonth === month && txYear === year;
    });
    const total = filtered.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] ?? 0) + t.amount;
      return acc;
    }, {} as CategoryTotals);

    return total;
  };
