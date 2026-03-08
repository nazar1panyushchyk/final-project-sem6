import Header from "./components/Header/Header";
// import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import Transactions from "./components/Transactions/Transactions";
// import "antd/dist/reset.css";
import "./css/app.css";

function App() {
  return (
    <>
      <Header />
      {/* <Auth /> */}
      <Main />
      <Transactions />
    </>
  );
}

export default App;
