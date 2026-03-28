import TransactionsForm from "../TransactionsForm/TransactionsForm";
import TransactionsTable from "../TransactionsTable/TransactionsTable";
import TransactionsSummary from "../TransactionsSummary/TransactionsSummary";
import { expenseData, incomeData } from "../TransactionsData/transactionsData";
import "../../css/transactions.css";
import { NavLink } from "react-router-dom";
import { MdBarChart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useState } from "react";
import { setBalance } from "../../redux/slice/financeSlice";
import { selectSummaryByType } from "../../redux/selectors/selector";
import { Link } from "react-router-dom";

type TransactionsProps = {
  type: "expense" | "income";
};

export default function Transactions({ type }: TransactionsProps) {
  const data = type === "income" ? incomeData : expenseData;
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const balance = useAppSelector((state) => state.finance.balance);
  const summary = useAppSelector(selectSummaryByType(type));
  const handleSubmit = () => {
    dispatch(setBalance(Number(inputValue)));
    setInputValue("");
  };
  const formattedBalance =
    balance
      .toLocaleString("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(",", ".") + " UAH";
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
                <input
                  type="number"
                  placeholder={formattedBalance}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                  ПІДТВЕРДИТИ
                </button>
              </div>
            </div>
            <div className="calculations">
              <Link
                to="/calc"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#52555FB2",
                }}
              >
                Перейти до розрахунків
                <MdBarChart
                  style={{
                    color: "#52555F",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Link>
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
            type={type}
            key={type}
            description={data.description}
            category={data.category}
            categories={data.categories}
          />

          <div className="transactions-content">
            <TransactionsTable type={type} />
            <TransactionsSummary summary={summary} />
          </div>
        </section>
      </div>
    </>
  );
}
