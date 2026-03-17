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

export const expenseCategories = [
  { id: "food", image: food, amount: "5 000.00", label: "ПРОДУКТИ" },
  { id: "alcohol", image: alcohol, amount: "200.00", label: "АЛКОГОЛЬ" },
  { id: "fun", image: fun, amount: "800.00", label: "РОЗВАГИ" },
  { id: "health", image: health, amount: "900.00", label: "ЗДОРОВ'Я" },
  { id: "transport", image: transport, amount: "2 000.00", label: "ТРАНСПОРТ" },
  { id: "home", image: home, amount: "1 500.00", label: "ВСЕ ДЛЯ ДОМУ" },
  { id: "technique", image: technique, amount: "800.00", label: "ТЕХНІКА" },
  {
    id: "utility",
    image: utility,
    amount: "2 200.00",
    label: "КОМУНАЛКА, ЗВ'ЯЗОК",
  },
  { id: "sport", image: sport, amount: "1 800.00", label: "СПОРТ, ХОБІ" },
  { id: "education", image: education, amount: "2 400.00", label: "НАВЧАННЯ" },
  { id: "other", image: other, amount: "3 000.00", label: "ІНШЕ" },
];

export const incomeCategories = [
  { id: "salary", image: salary, amount: "45 000.00", label: "ЗП" },
  {
    id: "additional-salary",
    image: addsalary,
    amount: "1 500.00",
    label: "ДОД. ДОХІД",
  },
];