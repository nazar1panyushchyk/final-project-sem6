import type { TransactionsProps } from "../TransactionsTypes/transactionsTypes";

export const expenseData: TransactionsProps = {
  description: "Опис товару",
  category: "Категорія товару",
  categories: [
    { value: "transport", label: "Транспорт", amount: "5 000.00" },
    { value: "products", label: "Продукти", amount: "200.00" },
    { value: "health", label: "Здоров'я", amount: "800.00" },
    { value: "alcohol", label: "Алкоголь", amount: "900.00" },
    { value: "entertainment", label: "Розваги", amount: "2 000.00" },
    { value: "home", label: "Все для дому", amount: "1 500.00" },
    { value: "technique", label: "Техніка", amount: "800.00" },
    {
      value: "utilities-network",
      label: "Комуналка, зв'язок",
      amount: "2200.00",
    },
    { value: "sport-hobby", label: "Спорт, хобі", amount: "1 800.00" },
    { value: "education", label: "Навчання", amount: "2 400.00" },
    { value: "other", label: "Інше", amount: "3 000.00" },
  ],
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
  category: "Категорія приубутку",
  categories: [
    { value: "salary", label: "ЗП", amount: "45 000.00" },
    { value: "additional-salary", label: "Дод. прибуток", amount: "1 500.00" },
  ],
  summary: [
    { id: 1, month: "ЛИСТОПАД", amount: "25 500.00" },
    { id: 2, month: "ЖОВТЕНЬ", amount: "25 500.00" },
    { id: 3, month: "ВЕРЕСЕНЬ", amount: "25 500.00" },
    { id: 4, month: "СЕРПЕНЬ", amount: "20 000.00" },
    { id: 5, month: "ЛИПЕНЬ", amount: "20 000.00" },
    { id: 6, month: "ЧЕРВЕНЬ", amount: "18 000.00" },
  ],
};
