import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/uk";

type PeriodSelectorProps = {
  currentMonthIndex: number;
  onChangeMonth: (index: number) => void;
};

export default function PeriodSelector({
  currentMonthIndex,
  onChangeMonth,
}: PeriodSelectorProps) {
  dayjs.locale("uk");

  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().startOf("year").add(i, "month"),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      onChangeMonth(index);
    };

    emblaApi.on("select", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(currentMonthIndex);
  }, [emblaApi, currentMonthIndex]);
    
  return (
    <>
      <div className="periodSelector">
        <div
          className="periodLabel"
          style={{ color: "#52555FB2", textAlign: "center", fontWeight: "500" }}
        >
          Поточний період
        </div>
        <div
          className="periodSwiper"
          style={{ display: "flex", alignItems: "center" }}
        >
          <button
            onClick={handlePrev}
            style={{ backgroundColor: "transparent" }}
          >
            <MdOutlineKeyboardArrowLeft
              style={{ width: "30px", height: "30px", color: "#FF751D" }}
            />
          </button>

          <div className="swiperCenter">
            <div
              className="embla"
              style={{
                overflow: "hidden",
                width: "135px",
              }}
              ref={emblaRef}
            >
              <div style={{ display: "flex" }} className="embla__container">
                {months.map((date) => (
                  <div
                    key={date.toString()}
                    style={{
                      flex: "0 0 100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "black",
                    }}
                  >
                    <span
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {date.format("MMMM")}
                    </span>

                    <span style={{ fontWeight: 600 }}>
                      {date.format("YYYY")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            style={{ backgroundColor: "transparent" }}
          >
            <MdOutlineKeyboardArrowRight
              style={{ width: "30px", height: "30px", color: "#FF751D" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
