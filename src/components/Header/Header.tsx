import logo from "../../../public/img/logo.png";
import userlogo from "../../../public/img/userlogo.png";
import line from "../../../public/img/line.png";
import "../../css/header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "39px", height: "31px" }}
          />
          <p style={{ fontWeight: "800", fontSize: "16px", color: "black" }}>
            INVESTIQ
          </p>
        </div>
        <div className="profile">
          <div className="user">
            <img
              src={userlogo}
              alt="userlogo"
              style={{ width: "32px", height: "32px" }}
            />
            <p style={{ color: " #52555F" }}>User Name</p>
          </div>
          <img src={line} alt="line" />
          <p style={{ color: "#52555F", textDecoration: "underline" }}>Вийти</p>
        </div>
      </header>
    </>
  );
}
