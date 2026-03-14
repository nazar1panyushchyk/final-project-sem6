import "../../css/transactions.css";

type TransactionsSummaryProps = {
  summary: {
    id: number;
    month: string;
    amount: string;
  }[];
};

export default function TransactionsSummary({ summary }: TransactionsSummaryProps) {
  return (
    <>
      <div className="summary">
        <p style={{ color: "#000000" }}>ЗВЕДЕННЯ</p>

        {summary.map((item) => (
          <div key={item.id} className="summary-item">
            <span style={{ color: "#52555F" }}>{item.month}</span>
            <span style={{ color: "#52555F" }}>{item.amount}</span>
          </div>
        ))}
      </div>
    </>
  );
}
