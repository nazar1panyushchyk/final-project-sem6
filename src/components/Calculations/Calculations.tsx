import { BsArrowLeft } from "react-icons/bs";
import "../../css/calculations.css";
import useEmblaCarousel from "embla-carousel-react";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import line from "../../../public/img/line.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  expenseCategories,
  incomeCategories,
} from "../categoriesData/categoriesData";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import IncomeChart from "../IncomeChart/IncomeChart";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import {
  selectCategoryTotalsByPeriod,
  selectTotalByTypeAndPeriod,
} from "../../redux/selectors/selector";

const pages = ["expenses", "income"] as const;
type Page = (typeof pages)[number];

dayjs.locale("uk");

const months = Array.from({ length: 12 }, (_, i) =>
  dayjs("2026-01-01").add(i, "month"),
);

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
  const navigate = useNavigate();
  const formatCurrency = (value: number) => {
    return (
      value.toLocaleString("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) + " грн"
    );
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
  });

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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentMonthIndex(index);
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    setCurrentMonthIndex((prev) => (prev === 11 ? 0 : prev + 1));
    emblaApi?.scrollNext();
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

          <div className="periodSelector">
            <div
              className="periodLabel"
              style={{ color: "#52555FB2", textAlign: "center" }}
            >
              Поточний період
            </div>
            <div
              className="periodSwiper"
              style={{ display: "flex", alignItems: "center" }}
            >
              <button
                onClick={handlePrev}
                style={{ backgroundColor: "transparent" }}
              >
                <MdOutlineKeyboardArrowLeft
                  style={{ width: "30px", height: "30px", color: "#FF751D" }}
                />
              </button>

              <div className="swiperCenter">
                <div
                  className="embla"
                  style={{
                    overflow: "hidden",
                    width: "135px",
                  }}
                  ref={emblaRef}
                >
                  <div style={{ display: "flex" }} className="embla__container">
                    {months.map((date) => (
                      <div
                        key={date.toString()}
                        style={{
                          flex: "0 0 100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          color: "black",
                        }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontWeight: 600,
                          }}
                        >
                          {date.format("MMMM")}
                        </span>

                        <span style={{ fontWeight: 600 }}>
                          {date.format("YYYY")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                style={{ backgroundColor: "transparent" }}
              >
                <MdOutlineKeyboardArrowRight
                  style={{ width: "30px", height: "30px", color: "#FF751D" }}
                />
              </button>
            </div>
          </div>
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
                    <>
                      <div className="calc-expenses">
                        <div className="calc-expenses-img">
                          {expenseCategories.map((item) => {
                            const Icon = item.icon;
                            return (
                              <button
                                className={`expense-item ${item.id === "utility" ? "two-lines" : ""}`}
                                key={item.id}
                                onClick={() =>
                                  setSelectedExpenseCategory(item.value)
                                }
                              >
                                <p style={{ color: "#52555F" }}>
                                  {formatCurrency(
                                    expenseCategoryTotals[item.value] ?? 0,
                                  )}
                                </p>
                                <div className="img-container">
                                  <Icon className={`category-icon ${item.value === selectedExpenseCategory ? "active-icon" : ""}`}/>
                                </div>
                                <p style={{ color: "#52555F" }}>{item.label}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="calc-income">
                        <div className="calc-income-img">
                          {incomeCategories.map((item) => {
                            const Icon = item.icon;
                            return (
                              <button
                                className="income-item"
                                key={item.id}
                                onClick={() =>
                                  setSelectedIncomeCategory(item.value)
                                }
                              >
                                <p style={{ color: "#52555F" }}>
                                  {formatCurrency(
                                    incomeCategoryTotals[item.value] ?? 0,
                                  )}
                                </p>
                                <div className="img-container">
                                  <Icon className={`category-icon ${item.value === selectedIncomeCategory ? "active-icon" : ""}`}/>
                                </div>
                                <p style={{ color: "#52555F" }}>{item.label}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="chart-container">
              {page === "expenses" ? <ExpensesChart /> : <IncomeChart />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
