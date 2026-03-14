import { BsArrowLeft } from "react-icons/bs";
import "../../css/calculations.css";

export default function Calculations() {
  return (
    <>
      <div>
        <div className="top-calc">
          <a href="#" style={{ color: "#52555FB2" }}>
            <BsArrowLeft
              style={{ color: "#FF751D", width: "30px", height: "25px" }}
            />
            Повернутись на головну
          </a>
          <div className="balance">
            <div className="balance-text">
              <p style={{ color: "#52555FB2" }}>Баланс:</p>
            </div>
            <div className="account">
              <input type="number" placeholder="00.00 UAH" />
              <button type="submit">ПІДТВЕРДИТИ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
