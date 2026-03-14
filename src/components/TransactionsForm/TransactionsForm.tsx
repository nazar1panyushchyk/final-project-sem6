import { DatePicker, Input, Select, Button } from "antd";
import { IoCalculatorOutline } from "react-icons/io5";
import "../../css/transactions.css";

type TransactionsFormProps = {
  description: string;
  category: string;
  categories: {
    value: string;
    label: string;
  }[];
};

export default function TransactionsForm({
  description,
  category,
  categories,
}: TransactionsFormProps) {
  return (
    <>
      <div className="transactions-form">
        <div className="date">
          <DatePicker
            format="DD.MM.YYYY"
            className="date-picker"
            placeholder="Вибір дати"
          />
        </div>
        <div className="transaction-inputs">
          <Input className="definition-input" placeholder={description} />
          <Select
            className="categories"
            options={categories}
            placeholder={category}
          />
          <Input
            className="sum-input"
            placeholder="0.00"
            suffix={
              <IoCalculatorOutline style={{ width: "23px", height: "23px" }} />
            }
          />
        </div>
        <div className="transaction-buttons">
          <Button type="primary" className="enter-button">
            ВВЕСТИ
          </Button>
          <Button className="clear-button">ОЧИСТИТИ</Button>
        </div>
      </div>
    </>
  );
}
