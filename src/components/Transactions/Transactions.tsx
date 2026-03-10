import TransactionsForm from "../TransactionsForm/TransactionsForm";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import TransactionsSummary from "../TransactionsSummary/TransactionsSummary";
import "../../css/transactions.css";

export default function Transactions() {
  return (
    <>
      <div className="container">
        <div className="main-page">
          <button className="expenses">ВИТРАТИ</button>
          <button className="income">ДОХІД</button>
        </div>

        <section className="transactions">
          <TransactionsForm />

          <div className="transactions-content">
            <TransactionsTable />
            <TransactionsSummary />
          </div>
        </section>
      </div>
    </>
  );
}
