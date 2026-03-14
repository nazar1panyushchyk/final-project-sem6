import TransactionsForm from "../TransactionsForm/TransactionsForm";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import TransactionsSummary from "../TransactionsSummary/TransactionsSummary";
import { expenseData, incomeData } from "../TransactionsData/transactionsData";
import "../../css/transactions.css";
// import calc from "../../../public/img/calc.png";
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
              <a href="#" style={{ color: "#52555FB2" }}>
                Перейти до розрахунків <MdBarChart style={{ color: "#52555F" }} />
              </a>
              {/* <img
                src={calc}
                alt="calculations"
                style={{ width: "14px", height: "14px" }}
              /> */}
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
            {/* <button className="expenses">ВИТРАТИ</button> */}
          </NavLink>
          <NavLink
            to="/income"
            className={({ isActive }) =>
              isActive ? "income active" : "income"
            }
          >
            ДОХІД
            {/* <button className="income">ДОХІД</button> */}
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
