import "../../css/auth.css";
import google from "../../../public/img/google.png";

export default function Auth() {
  return (
    <>
      <div className="auth-container">
        <div className="main-text">
          <h1 style={{ color: "#000000", fontSize: "102px" }}>InvestIQ</h1>
          <p style={{ color: "#52555F" }}>
            SMART FINANCE
          </p>
        </div>
        <div className="auth-form">
          <div className="auth">
            <p>
              Ви можете авторизуватися за допомогою
              <br />
              акаунта Google
            </p>
            <div className="button-google">
              <button className="google">
                <img
                  src={google}
                  alt="google"
                  style={{ width: "18px", height: "18px" }}
                />
                Google
              </button>
            </div>
            <p>
              Або увійти за допомогою ел. пошти та
              <br />
              паролю після реєстрації
            </p>
            <form>
              <label>Електронна пошта:</label>
              <input type="text" placeholder="your@email.com" />
              <label>Пароль:</label>
              <input type="text" placeholder="••••••••" />
            </form>
            <div className="auth-buttons">
              <button>УВІЙТИ</button>
              <button>РЕЄСТРАЦІЯ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
