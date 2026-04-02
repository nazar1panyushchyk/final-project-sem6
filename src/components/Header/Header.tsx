import logo from "../../../public/img/logo.png";
import line from "../../../public/img/line.png";
import "../../css/header.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { logoutUser } from "../../redux/slice/authSlice";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const [modalOpen, setModalOpen] = useState(false);
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";
  const handleLogout = () => {
    dispatch(logoutUser());
    setModalOpen(false);
    navigate("/");
  };
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
                <div className="avatar">U</div>
                <p style={{ color: " #52555F" }}>User Name</p>
              </div>
              <img src={line} alt="line" />
              <button
                className="exit-button"
                onClick={() => setModalOpen(true)}
              >
                Вийти
              </button>
            </div>
          )}
      </header>

      {modalOpen && (
        <div className="overlay">
          <div className="modal-container">
            <button className="cross" onClick={() => setModalOpen(false)}>
              <RxCross2 />
            </button>
            <p>Ви дійсно хочете вийти?</p>
            <div className="modal-buttons">
              <button onClick={handleLogout}>Так</button>
              <button onClick={() => setModalOpen(false)}>Ні</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
