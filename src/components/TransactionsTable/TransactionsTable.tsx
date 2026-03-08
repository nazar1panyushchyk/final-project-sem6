import { Table, Button } from "antd";
import type { TableProps } from "antd";
import "../../css/transactions.css";
import { IoTrashOutline } from "react-icons/io5";

interface Transaction {
  key: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}

const columns: TableProps<Transaction>["columns"] = [
  {
    title: "ДАТА",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "ОПИС",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "КАТЕГОРІЯ",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "СУМА",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => (
      <span style={{ color: "red" }}>- {amount}.00 грн.</span>
    ),
  },
  {
    title: "",
    key: "delete",
    render: () => (
      <Button className="delete-button">
        <IoTrashOutline style={{ width: "23px", height: "23px" }} />
      </Button>
    ),
  },
];

const data: Transaction[] = [
  {
    key: "1",
    date: "05.09.2019",
    description: "Метро",
    category: "Транспорт",
    amount: 30,
  },
  {
    key: "2",
    date: "05.09.2019",
    description: "Банани",
    category: "Продукти",
    amount: 50,
  },
];

export default function Transactions() {
  return (
    <>
      <div className="transaction-table">
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </>
  );
}
