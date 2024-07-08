import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="w-full h-full">
          <Slider {...settings}>
            <div>
              <img
                className="w-screen h-screen"
                src={'assets/sliderImages/1.svg'}
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                className="w-screen h-screen"
                src="assets/sliderImages/2.svg"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                className="w-screen h-screen"
                src="assets/sliderImages/3.svg"
                alt="Slide 3"
              />
            </div>
          </Slider>
        </div>

        <div className="absolute flex">
          <img
            className="w-1/2 h-full rounded-lg"
            src="assets/sliderImages/3.svg"
          />
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
  )
}

export default Home
