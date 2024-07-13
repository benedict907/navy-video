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
            <div className="w-screen h-screen">
              <img
                className="w-full h-full"
                src={'assets/sliderImages/slider_1_bg.png'}
                alt="Slide 1"
              />
              <img
                alt="front_image"
                className="w-96 h-full rounded-lg absolute top-0"
                src={'assets/sliderImages/slider_1.svg'}
              />
            </div>
            <div className="w-screen h-screen">
              <img
                className="w-full h-full"
                src={'assets/sliderImages/slider_2_bg.png'}
                alt="Slide 1"
              />
              <img
                alt="front_image"
                className="w-96 h-full rounded-lg absolute top-0"
                src={'assets/sliderImages/slider_2.svg'}
              />
            </div>
            <div className="w-screen h-screen">
              <img
                className="w-full h-full"
                src={'assets/sliderImages/slider_3_bg.png'}
                alt="Slide 1"
              />
              <img
                alt="front_image"
                className="w-96 h-full rounded-lg absolute top-0"
                src={'assets/sliderImages/slider_3.svg'}
              />
            </div>
          </Slider>
        </div>

        <div className="absolute right-0 top-24 w-1/2">
          <div className=" flex justify-center items-center">
            <img src="assets/logo.svg" className="w-32 h-32" alt="logo" />
          </div>
          <div className="mx-5 ">
            <h1 className="text-white font-anton text-4xl">
              Declasified BOI of IN 240
            </h1>
            <h1 className="text-white font-raleway text-lg">
              Established in 1992, Stratford Accounting is a full service firm,
              offering affordable accounting solutions to individuals and local
              and international businesses
            </h1>
            <div className="flex justify-end mt-5">
              <Link to="/details">
                <button className="bg-button-colour p-2 w-32 rounded-full text-white font-bold text-lg">
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
