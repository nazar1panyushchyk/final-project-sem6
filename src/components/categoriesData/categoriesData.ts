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
  { id: "transport", value: "transport", image: transport, label: "ТРАНСПОРТ" },
  { id: "products", value: "products", image: food, label: "ПРОДУКТИ" },
  { id: "alcohol", value: "alcohol", image: alcohol, label: "АЛКОГОЛЬ" },
  { id: "fun", value: "fun", image: fun, label: "РОЗВАГИ" },
  { id: "health", value: "health", image: health, label: "ЗДОРОВ'Я" },
  { id: "home", value: "home", image: home, label: "ВСЕ ДЛЯ ДОМУ" },
  { id: "technique", value: "technique", image: technique, label: "ТЕХНІКА" },
  {
    id: "utility",
    value: "utility",
    image: utility,
    label: "КОМУНАЛКА, ЗВ'ЯЗОК",
  },
  { id: "sport", value: "sport", image: sport, label: "СПОРТ, ХОБІ" },
  { id: "education", value: "education", image: education, label: "НАВЧАННЯ" },
  { id: "other", value: "other", image: other, label: "ІНШЕ" },
];

export const incomeCategories = [
  { id: "salary", value: "salary", image: salary, label: "ЗП" },
  {
    id: "additional-salary",
    value: "additional-salary",
    image: addsalary,
    label: "ДОД. ДОХІД",
  },
];

export const allCategories = [...expenseCategories, ...incomeCategories];