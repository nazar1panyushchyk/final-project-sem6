import "../../css/transactions.css";

type TransactionsSummaryProps = {
  summary: {
    month: string;
    amount: number;
  }[];
};

export default function TransactionsSummary({
  summary,
}: TransactionsSummaryProps) {
  return (
    <>
      <div className="summary">
        <div className="summary-header">
          <p style={{ color: "#000000" }}>ЗВЕДЕННЯ</p>
        </div>
        <div className="summary-list">
          {summary.map((item) => (
            <div key={item.month} className="summary-item">
              <span style={{ color: "#52555F" }}>{item.month}</span>
              <span style={{ color: "#52555F" }}>{item.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
