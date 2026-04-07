import logo from "../../../public/img/logo.png";
import line from "../../../public/img/line.png";
import "../../css/header.css";
import "../../css/modal.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { logoutUser } from "../../redux/slice/authSlice";
import { RxCross2 } from "react-icons/rx";
import { clearFinanceData, resetInitialModal } from "../../redux/slice/financeSlice";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [modalOpen, setModalOpen] = useState(false);
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";
  const handleLogout = () => {
    dispatch(clearFinanceData());
    dispatch(logoutUser());
    dispatch(resetInitialModal());
    setModalOpen(false);
    navigate("/");

    localStorage.removeItem("persist:finance");
  };
  useEffect(() => {
    if (modalOpen === true) {
        document.body.style.overflow = "hidden";
    } else {
       document.body.style.overflow = "auto";
    }
  }, [modalOpen])
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
        {!isAuthPage && currentUser && (
          <div className="profile">
            <div className="user">
              <div className="avatar">
                {currentUser.name[0].toUpperCase()}
              </div>
              <p style={{ color: " #52555F" }}>{currentUser.name}</p>
            </div>
            <img src={line} alt="line" />
            <button className="exit-button" onClick={() => setModalOpen(true)}>
              Вийти
            </button>
          </div>
        )}
      </header>

      {modalOpen && (
        <div className="overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cross-container">
              <button className="cross" onClick={() => setModalOpen(false)}>
                <RxCross2 style={{ width: "22px", height: "22px" }} />
              </button>
            </div>
            <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 500 }}>Ви дійсно хочете вийти?</p>
            <div className="modal-buttons">
              <button onClick={handleLogout}>ТАК</button>
              <button onClick={() => setModalOpen(false)}>НІ</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
