import "../../css/transactions.css";

export default function TransactionsSummary() {
  const summary = [
    { month: "ЛИСТОПАД", amount: "10 000.00" },
    { month: "ЖОВТЕНЬ", amount: "30 000.00" },
    { month: "ВЕРЕСЕНЬ", amount: "10 000.00" },
    { month: "СЕРПЕНЬ", amount: "10 000.00" },
    { month: "ЛИПЕНЬ", amount: "10 000.00" },
    { month: "ЧЕРВЕНЬ", amount: "10 000.00" },
  ];
  return (
    <>
      <div className="summary">
        <p style={{ color: "#000000" }}>ЗВЕДЕННЯ</p>

        {summary.map((item) => (
          <div className="summary-item">
            <span style={{ color: "#52555F" }}>{item.month}</span>
            <span style={{ color: "#52555F" }}>{item.amount}</span>
          </div>
        ))}
      </div>
    </>
  );
}
