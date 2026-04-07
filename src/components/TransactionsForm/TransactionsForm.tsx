import { DatePicker, Input, Select, Button, message } from "antd";
import { IoCalculatorOutline } from "react-icons/io5";
import "../../css/transactions.css";
import type { TransactionType } from "../FinanceState/financeState";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { addTransaction } from "../../redux/slice/financeSlice";
import type { Dayjs } from "dayjs";

type TransactionsFormProps = {
  description: string;
  category: string;
  categories: {
    value: string;
    label: string;
  }[];
  type: TransactionType;
};

export default function TransactionsForm({
  description,
  category,
  categories,
  type,
}: TransactionsFormProps) {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [info, setInfo] = useState<string>("");
  const [group, setGroup] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState<string>("");
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.finance.balance);
  const checkAmount = Number(amount);
  const handleSubmit = () => {
    if (Number.isNaN(checkAmount) || checkAmount <= 0) {
      message.error("Введіть коректну суму!");
      return;
    }
    if (!date || !info || !group || !amount) {
      message.error("Заповніть усі дані!");
      return;
    }
    const selectedCategory = categories.find((c) => c.value === group);
    if (!selectedCategory) return;
    if (type === "expense" && Number(amount) > balance) {
      message.error("Недостатньо коштів на балансі!");
      return;
    }
    dispatch(
      addTransaction({
        date: date.format("DD.MM.YYYY"),
        description: info,
        category: group,
        amount: Number(amount),
        type,
      }),
    );
    setDate(null);
    setInfo("");
    setGroup(undefined);
    setAmount("");
  };
  const handleClear = () => {
    setDate(null);
    setInfo("");
    setGroup("");
    setAmount("");
  };
  return (
    <>
      <div className="transactions-form">
        <div className="date">
          <DatePicker
            format="DD.MM.YYYY"
            className="date-picker"
            placeholder="Вибір дати"
            value={date}
            onChange={(value) => setDate(value)}
          />
        </div>
        <div className="transaction-inputs">
          <Input
            className="definition-input"
            placeholder={description}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <Select
            className="categories"
            options={categories}
            placeholder={category}
            value={group || undefined}
            onChange={(value) => setGroup(value)}
            allowClear
          />
          <Input
            className="sum-input"
            style={{ display: "flex", alignItems: "center" }}
            placeholder="0.00"
            suffix={
              <IoCalculatorOutline style={{ width: "23px", height: "23px" }} />
            }
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="transaction-buttons">
          <Button
            type="primary"
            className="enter-button"
            onClick={handleSubmit}
          >
            ВВЕСТИ
          </Button>
          <Button className="clear-button" onClick={handleClear}>
            ОЧИСТИТИ
          </Button>
        </div>
      </div>
    </>
  );
}
