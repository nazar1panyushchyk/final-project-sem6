import { DatePicker, Input, Select, Button } from "antd";
import { IoCalculatorOutline } from "react-icons/io5";
import "../../css/transactions.css";

export default function TransactionsForm() {
  const categories = [
    { value: "transport", label: "Транспорт" },
    { value: "products", label: "Продукти" },
    { value: "health", label: "Здоров'я" },
    { value: "alcohol", label: "Алкоголь" },
    { value: "entertainment", label: "Розваги" },
    { value: "home", label: "Все для дому" },
    { value: "technique", label: "Техніка" },
    { value: "utilities-network", label: "Комуналка, зв'язок" },
    { value: "sport-hobby", label: "Спорт, хобі" },
    { value: "education", label: "Навчання" },
    { value: "other", label: "Інше" },
  ];

  return (
    <>
      <div className="transactions-form">
        <div className="date">
          <DatePicker format="DD.MM.YYYY" className="date-picker" placeholder="Вибір дати"/>
        </div>
        <div className="transaction-inputs">
          <Input className="definition-input" placeholder="Опис товару" />
          <Select
            className="categories"
            options={categories}
            placeholder="Категорія товару"
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
