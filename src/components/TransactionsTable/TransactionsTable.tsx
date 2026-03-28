import { Table, Button } from "antd";
import type { TableProps } from "antd";
import "../../css/transactions.css";
import { IoTrashOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import type { Transaction } from "../FinanceState/financeState";
import { deleteTransaction } from "../../redux/slice/financeSlice";

type TransactionsTableProps = {
  type: "expense" | "income";
};

export default function TransactionsTable({ type }: TransactionsTableProps) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.finance.transactions);
  const filteredData = data.filter((t) => t.type === type);
  const shouldScroll = filteredData.length > 4;
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
        <span style={{ color: type === "expense" ? "red" : "green", fontWeight: "bold" }}>
          {type === "expense" ? "-" : "+"} {amount}.00 грн.
        </span>
      ),
    },
    {
      title: "",
      key: "delete",
      render: (_, record) => (
        <Button
          className="delete-button"
          onClick={() => dispatch(deleteTransaction(record.id))}
        >
          <IoTrashOutline style={{ width: "23px", height: "23px" }} />
        </Button>
      ),
    },
  ];
  return (
    <>
      <div className="transaction-table">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          scroll={shouldScroll ? { y: 300 } : undefined} 
        />
      </div>
    </>
  );
}
