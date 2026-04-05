import { useState, useRef, useEffect } from "react";
import "../../css/initialModal.css";

export default function InitialModal() {
  const [show, setShow] = useState(true);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {show && (
        <div className="initial-modal" ref={boxRef}>
          <div className="arrow" />
          <div style={{ fontSize: "17px" }}>
            Привіт! Для початку роботи внесіть свій поточний баланс
            <br />
            рахунку!
            <span style={{ fontSize: "14px" }}>
              Ви не можете витрачати гроші, поки їх у Вас немає :)
            </span>
          </div>
        </div>
      )}
    </>
  );
}
