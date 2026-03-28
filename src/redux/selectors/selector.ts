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

export const selectSummaryByType = (type: TransactionType) => {
  return (state: RootState) => {
    const data = state.finance.transactions;
    const filtered = data.filter((t) => t.type === type);
    const summary = MONTHS.map((month) => ({
      month,
      amount: 0,
    }));

    const currentYear = String(new Date().getFullYear());

    filtered.forEach((transaction) => {
      const [_, month, year] = transaction.date.split(".");
      if (year !== currentYear) return;
      const monthIndex = Number(month) - 1;
      summary[monthIndex].amount += transaction.amount;
      if (!summary[monthIndex]) return;
    });

    return summary;
  };
};
