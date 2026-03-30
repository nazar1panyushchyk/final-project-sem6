import { BsArrowLeft } from "react-icons/bs";
import "../../css/calculations.css";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import line from "../../../public/img/line.png";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  expenseCategories,
  incomeCategories,
} from "../categoriesData/categoriesData";
import FinanceChart from "../FinanceChart/FinanceChart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import {
  selectCategoryTotalsByPeriod,
  selectChartDataByCategoryAndPeriod,
  selectTotalByTypeAndPeriod,
} from "../../redux/selectors/selector";
import CategoryList from "../CategoryList/CategoryList";
import PeriodSelector from "../PeriodSelector/PeriodSelector";

const pages = ["expenses", "income"] as const;
type Page = (typeof pages)[number];

export default function Calculations() {
  const [selectedMonth, setSelectedMonth] = useState(dayjs().month() + 1);
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [selectedExpenseCategory, setSelectedExpenseCategory] = useState(
    expenseCategories[0].value,
  );
  const [selectedIncomeCategory, setSelectedIncomeCategory] = useState(
    incomeCategories[0].value,
  );
  useEffect(() => {
    setSelectedMonth(currentMonthIndex + 1);
    setSelectedYear(dayjs().year());
  }, [currentMonthIndex]);
  const expensesMonth = useAppSelector(
    selectTotalByTypeAndPeriod("expense", selectedMonth, selectedYear),
  );
  const incomeMonth = useAppSelector(
    selectTotalByTypeAndPeriod("income", selectedMonth, selectedYear),
  );
  const expenseCategoryTotals = useAppSelector(
    selectCategoryTotalsByPeriod("expense", selectedMonth, selectedYear),
  );
  const incomeCategoryTotals = useAppSelector(
    selectCategoryTotalsByPeriod("income", selectedMonth, selectedYear),
  );
  const balance = useAppSelector((state) => state.finance.balance);
  const expensesChartData = useAppSelector(
    selectChartDataByCategoryAndPeriod(
      "expense",
      selectedExpenseCategory,
      selectedMonth,
      selectedYear,
    ),
  );
  const incomeChartData = useAppSelector(
    selectChartDataByCategoryAndPeriod(
      "income",
      selectedIncomeCategory,
      selectedMonth,
      selectedYear,
    ),
  );
  const navigate = useNavigate();
  const formatCurrency = (value: number) => {
    return (
      value.toLocaleString("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " грн"
    );
  };

  const [[index, direction], setPage] = useState([0, 0]);

  const page: Page = pages[index];

  const paginate = (dir: number) => {
    const newIndex = (index + dir + pages.length) % pages.length;
    setPage([newIndex, dir]);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="calc-container">
        <div className="calc-top">
          <div className="go-back">
            <button onClick={() => navigate("/expenses")}>
              <BsArrowLeft
                style={{
                  color: "#FF751D",
                  width: "30px",
                  height: "25px",
                  marginTop: "1px",
                }}
              />
              Повернутись на головну
            </button>
          </div>

          <div className="calc-balance">
            <div className="balance-text">
              <p style={{ color: "#52555FB2", fontWeight: "500" }}>Баланс:</p>
            </div>
            <div className="balance-value">
              <p className="current-balance">{formatCurrency(balance)}</p>
            </div>
          </div>

          <PeriodSelector
            currentMonthIndex={currentMonthIndex}
            onChangeMonth={setCurrentMonthIndex}
          />
        </div>
        <div className="calc-accounts">
          <p className="expenses-text">
            Витрати:{" "}
            <span style={{ color: "#E53935" }}>
              - {formatCurrency(expensesMonth)}
            </span>
          </p>
          <img src={line} alt="line" />
          <p className="income-text">
            Доходи:{" "}
            <span style={{ color: "#407946" }}>
              + {formatCurrency(incomeMonth)}
            </span>
          </p>
        </div>
        <div>
          <div>
            <div className="calc-slider">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ layout: { duration: 0.25 } }}
                  className={`calc-slider-card ${
                    page === "expenses" ? "expenses-card" : "income-card"
                  }`}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{ backgroundColor: "transparent" }}
                      onClick={() => paginate(-1)}
                    >
                      <MdOutlineKeyboardArrowLeft
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#FF751D",
                        }}
                      />
                    </button>
                    <p
                      style={{
                        color: "black",
                        fontWeight: 700,
                        fontSize: "16px",
                        paddingBottom: "3px",
                      }}
                    >
                      {page === "expenses" ? "ВИТРАТИ" : "ДОХОДИ"}
                    </p>

                    <button
                      style={{ backgroundColor: "transparent" }}
                      onClick={() => paginate(1)}
                    >
                      <MdOutlineKeyboardArrowRight
                        style={{
                          width: "30px",
                          height: "30px",
                          color: "#FF751D",
                        }}
                      />
                    </button>
                  </div>
                  {page === "expenses" ? (
                    <CategoryList
                      categories={expenseCategories}
                      totals={expenseCategoryTotals}
                      selected={selectedExpenseCategory}
                      onSelect={setSelectedExpenseCategory}
                      formatCurrency={formatCurrency}
                      variant={"expense"}
                    />
                  ) : (
                    <CategoryList
                      categories={incomeCategories}
                      totals={incomeCategoryTotals}
                      selected={selectedIncomeCategory}
                      onSelect={setSelectedIncomeCategory}
                      formatCurrency={formatCurrency}
                      variant={"income"}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="chart-container">
              {page === "expenses" ? (
                <FinanceChart data={expensesChartData} />
              ) : (
                <FinanceChart data={incomeChartData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
