import { useRef, useEffect } from "react";
import "../../css/initialModal.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { closeInitialModal } from "../../redux/slice/financeSlice";

export default function InitialModal() {
  const dispatch = useAppDispatch();
  const isInitialModalClosed = useAppSelector((state) => state.finance.isInitialModalClosed);
  const boxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isInitialModalClosed) return;

    function handleClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        dispatch(closeInitialModal());
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isInitialModalClosed, dispatch]);

  if (isInitialModalClosed) return null;

  return (
    <>
        <div className="initial-modal" ref={boxRef}>
          <div className="arrow" />
          <div style={{ fontSize: "17px" }}>
            Привіт! Для початку роботи
            <br />
            внесіть свій поточний баланс рахунку!
            <span style={{ fontSize: "14px" }}>
              Ви не можете витрачати гроші, поки їх у Вас немає :)
            </span>
          </div>
        </div>
    </>
  );
}
