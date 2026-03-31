import Calculations from "./components/Calculations/Calculations";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login/Login";
import Transactions from "./components/Transactions/Transactions";
import "./css/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Auth/Registration/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/expenses" element={<Transactions type="expense" />} />
          <Route path="/income" element={<Transactions type="income" />} />
          <Route path="*" element={<Navigate to="/expenses" />} />
          <Route path="/calc" element={<Calculations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
