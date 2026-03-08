import "../../css/main.css";
import calc from "../../../public/img/calc.png";

export default function Main() {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="top-main">
            <div className="balance">
              <div className="balance-text">
                <p style={{ color: "#52555FB2" }}>Баланс:</p>
              </div>
              <div className="account">
                <input type="number" placeholder="00.00 UAH" />
                <button type="submit">ПІДТВЕРДИТИ</button>
              </div>
            </div>
            <div className="calculations">
              <a href="#" style={{ color: "#52555FB2" }}>
                Перейти до розрахунків
              </a>
              <img
                src={calc}
                alt="calculations"
                style={{ width: "14px", height: "14px" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
