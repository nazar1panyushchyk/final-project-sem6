import FoodIcon from "../../../public/img/food.svg";
import AlcoholIcon from "../../../public/img/alcohol.svg";
import FunIcon from "../../../public/img/fun.svg";
import HealthIcon from "../../../public/img/health.svg";
import TransportIcon from "../../../public/img/transport.svg";
import HomeIcon from "../../../public/img/home.svg";
import TechniqueIcon from "../../../public/img/technique.svg";
import UtilityIcon from "../../../public/img/utility.svg";
import SportIcon from "../../../public/img/sport.svg";
import EducationIcon from "../../../public/img/education.svg";
import OtherIcon from "../../../public/img/other.svg";
import SalaryIcon from "../../../public/img/salary.svg";
import AddSalaryIcon from "../../../public/img/addsalary.svg";

export const expenseCategories = [
  { id: "products", value: "products", icon: FoodIcon, label: "ПРОДУКТИ" },
  { id: "alcohol", value: "alcohol", icon: AlcoholIcon, label: "АЛКОГОЛЬ" },
  { id: "fun", value: "fun", icon: FunIcon, label: "РОЗВАГИ" },
  { id: "health", value: "health", icon: HealthIcon, label: "ЗДОРОВ'Я" },
  {
    id: "transport",
    value: "transport",
    icon: TransportIcon,
    label: "ТРАНСПОРТ",
  },
  { id: "home", value: "home", icon: HomeIcon, label: "ВСЕ ДЛЯ ДОМУ" },
  {
    id: "technique",
    value: "technique",
    icon: TechniqueIcon,
    label: "ТЕХНІКА",
  },
  {
    id: "utility",
    value: "utility",
    icon: UtilityIcon,
    label: "КОМУНАЛКА, ЗВ'ЯЗОК",
  },
  { id: "sport", value: "sport", icon: SportIcon, label: "СПОРТ, ХОБІ" },
  {
    id: "education",
    value: "education",
    icon: EducationIcon,
    label: "НАВЧАННЯ",
  },
  { id: "other", value: "other", icon: OtherIcon, label: "ІНШЕ" },
];

export const incomeCategories = [
  { id: "salary", value: "salary", icon: SalaryIcon, label: "ЗП" },
  {
    id: "additional-salary",
    value: "additional-salary",
    icon: AddSalaryIcon,
    label: "ДОД. ДОХІД",
  },
];

export const allCategories = [...expenseCategories, ...incomeCategories];