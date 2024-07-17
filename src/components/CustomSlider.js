import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    backgroundImage: '/assets/sliderImages/slider_1_bg.png',
    frontImage: '/assets/sliderImages/slider_1.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_2_bg.png',
    frontImage: '/assets/sliderImages/slider_2.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_3_bg.png',
    frontImage: '/assets/sliderImages/slider_3.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_4_bg.png',
    frontImage: '/assets/sliderImages/slider_4.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_5_bg.png',
    frontImage: '/assets/sliderImages/slider_5.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_6_bg.png',
    frontImage: '/assets/sliderImages/slider_6.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_7_bg.png',
    frontImage: '/assets/sliderImages/slider_7.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_8_bg.png',
    frontImage: '/assets/sliderImages/slider_8.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_9_bg.png',
    frontImage: '/assets/sliderImages/slider_9.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_10_bg.png',
    frontImage: '/assets/sliderImages/slider_10.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_11_bg.png',
    frontImage: '/assets/sliderImages/slider_11.png'
  },
  {
    backgroundImage: '/assets/sliderImages/slider_12_bg.png',
    frontImage: '/assets/sliderImages/slider_12.png'
  }
]

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex items-center">
            <img
              alt="front_image"
              className="w-half rounded-e-2xl overflow-hidden"
              src={`${slide.frontImage}`}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center absolute right-12 lg:top-56 top-40">
        <img
          src={'/assets/logo.svg'}
          className="lg:w-72 lg:h-72 w-32 h-32"
          alt="logo"
        />
        <div className="mx-10">
          <h1 className="text-white font-anton lg:text-6xl text-2xl text-center">
            {'Declassified BOI of IN 240'}
          </h1>

          <div className="flex justify-center mt-5">
            <Link to="/details">
              <button className="bg-button-colour p-2 w-32 rounded-full text-white font-bold text-lg">
                Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSlider
