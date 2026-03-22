import TransactionsForm from "../TransactionsForm/TransactionsForm";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import TransactionsSummary from "../TransactionsSummary/TransactionsSummary";
import { expenseData, incomeData } from "../TransactionsData/transactionsData";
import "../../css/transactions.css";
import { NavLink } from "react-router-dom";
import { MdBarChart } from "react-icons/md";

type TransactionsProps = {
  type: "expense" | "income";
};

export default function Transactions({ type }: TransactionsProps) {
  const data = type === "income" ? incomeData : expenseData;
  return (
    <>
      <main>
        <div className="main-container">
          <div className="top-main">
            <div className="balance">
              <div className="balance-text">
                <p style={{ color: "#52555FB2" }}>Баланс:</p>
              </div>
              <div className="account">
                <input type="number" placeholder="00.00 UAH" />
                <button type="submit">ПІДТВЕРДИТИ</button>
              </div>
            </div>
            <div className="calculations">
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#52555FB2",
                }}
              >
                Перейти до розрахунків{" "}
                <MdBarChart
                  style={{
                    color: "#52555F",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="container">
        <div className="main-page">
          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              isActive ? "expenses active" : "expenses"
            }
          >
            ВИТРАТИ
          </NavLink>
          <NavLink
            to="/income"
            className={({ isActive }) =>
              isActive ? "income active" : "income"
            }
          >
            ДОХІД
          </NavLink>
        </div>

        <section className="transactions">
          <TransactionsForm
            key={type}
            description={data.description}
            category={data.category}
            categories={data.categories}
          />

          <div className="transactions-content">
            <TransactionsTable type={type} />
            <TransactionsSummary summary={data.summary} />
          </div>
        </section>
      </div>
    </>
  );
}
