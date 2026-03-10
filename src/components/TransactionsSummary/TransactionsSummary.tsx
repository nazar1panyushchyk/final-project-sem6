import "../../css/transactions.css";

export default function TransactionsSummary() {
  const summary = [
    { id: 1, month: "ЛИСТОПАД", amount: "10 000.00" },
    { id: 2, month: "ЖОВТЕНЬ", amount: "30 000.00" },
    { id: 3, month: "ВЕРЕСЕНЬ", amount: "10 000.00" },
    { id: 4, month: "СЕРПЕНЬ", amount: "10 000.00" },
    { id: 5, month: "ЛИПЕНЬ", amount: "10 000.00" },
    { id: 6, month: "ЧЕРВЕНЬ", amount: "10 000.00" },
  ];
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
