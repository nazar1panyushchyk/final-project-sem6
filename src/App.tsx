import Header from "./components/Header/Header";
// import Auth from "./components/Auth/Auth";
import Transactions from "./components/Transactions/Transactions";
// import Calculations from "./components/Calculations/Calculations";
// import "antd/dist/reset.css";
import "./css/app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Calculations /> */}
      {/* <Auth /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/expenses" element={<Transactions type="expense" />} />
          <Route path="/income" element={<Transactions type="income" />} />
          <Route path="*" element={<Navigate to="/expenses" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
