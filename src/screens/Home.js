import React from "react";
import { Link } from "react-router-dom";
import Carousal from "../components/Carousal";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center flex-col">
        <Carousal
          slides={[
            "/sliderImages/1.svg",
            "/sliderImages/2.svg",
            "/sliderImages/3.svg",
          ]}
        />
        <div className="absolute flex">
          <img className="w-1/2 h-full rounded-lg" src="/sliderImages/3.svg" />
          <div className="mx-5">
            <h1 className="text-white font-bold text-4xl">
              Declasified BOI of IN 240
            </h1>
            <h1 className="text-white font-semibold text-lg">
              Established in 1992, Stratford Accounting is a full service firm,
              offering affordable accounting solutions to individuals and local
              and international businesses
            </h1>
            <div className="flex justify-end mt-5">
              <Link to="/details">
                <button className="bg-yellow-200 p-2 w-32 rounded-full text-black font-bold text-lg">
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
