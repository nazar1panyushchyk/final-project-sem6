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
import food from "../../../public/img/food.svg";
import alcohol from "../../../public/img/alcohol.svg";
import fun from "../../../public/img/fun.svg";
import health from "../../../public/img/health.svg";
import transport from "../../../public/img/transport.svg";
import home from "../../../public/img/home.svg";
import technique from "../../../public/img/technique.svg";
import utility from "../../../public/img/utility.svg";
import sport from "../../../public/img/sport.svg";
import education from "../../../public/img/education.svg";
import other from "../../../public/img/other.svg";
import salary from "../../../public/img/salary.svg";
import addsalary from "../../../public/img/addsalary.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = ["expenses", "income"] as const;
type Page = (typeof pages)[number];

dayjs.locale("uk");

const months = Array.from({ length: 24 }, (_, i) =>
  dayjs("2025-01-01").add(i, "month"),
);

export default function Calculations() {
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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  return (
    <>
      <div className="calc-container">
        <div className="calc-top">
          <a href="#" style={{ color: "#52555FB2" }}>
            <BsArrowLeft
              style={{
                color: "#FF751D",
                width: "30px",
                height: "25px",
                marginTop: "1px",
              }}
            />
            Повернутись на головну
          </a>

          <div className="balance">
            <div className="balance-text">
              <p style={{ color: "#52555FB2" }}>Баланс:</p>
            </div>
            <div className="account">
              <input type="number" placeholder="00.00 UAH" />
              <button type="submit">ПІДТВЕРДИТИ</button>
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
                onClick={scrollPrev}
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
                onClick={scrollNext}
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
            Витрати: <span style={{ color: "#E53935" }}>-18 000.00 грн.</span>
          </p>
          <img src={line} alt="line" />
          <p className="income-text">
            Доходи: <span style={{ color: "#407946" }}>+45 000.00 грн.</span>
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
                  transition={{ duration: 0.25 }}
                  className="calc-slider-card"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
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
                    <div className="expenses">
                      <div className="expenses-img">
                        <img src={food} alt="food" />
                        <img src={alcohol} alt="alcohol" />
                        <img src={fun} alt="fun" />
                        <img src={health} alt="health" />
                        <img src={transport} alt="transport" />
                        <img src={home} alt="home" />
                        <img src={technique} alt="technique" />
                        <img src={utility} alt="utility" />
                        <img src={sport} alt="sport" />
                        <img src={education} alt="education" />
                        <img src={other} alt="other" />
                      </div>
                    </div>
                  ) : (
                    <div className="income">
                      <div className="income-img">
                        <img src={salary} alt="salary" />
                        <img src={addsalary} alt="additional-income" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
