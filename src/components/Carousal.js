import { useEffect, useState } from "react";

export default function Carousal({ slides }) {
  let [current, setCurrent] = useState(0);

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  console.log("sdfs", { transform: `translateX(-${current * 100}%)` });
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [current]); // Re-run effect whenever currentSlide changes

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-in duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (
            <img className="opacity-50 bg-cover h-screen w-screen" src={s} />
          );
        })}
      </div>
    </div>
  );
}
