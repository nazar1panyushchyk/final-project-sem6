import TransactionsForm from "../TransactionsForm/TransactionsForm";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import TransactionsSummary from "../TransactionsSummary/TransactionsSummary";
import "../../css/transactions.css";

export default function Transactions() {
  return (
    <section className="transactions">
      <TransactionsForm />

      <div className="transactions-content">
        <TransactionsTable />
        <TransactionsSummary />
      </div>
    </section>
  );
}
