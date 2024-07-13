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
    <div
      style={{
        backgroundImage: `url("assets/home_page.svg")`,
        backgroundSize: 'cover', // Change this to 'contain', 'auto', or specific dimensions as needed
        backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
        backgroundPosition: 'center' // Centers the image
      }}
      className="h-screen w-full p-10"
    >
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-white text-5xl font-bold text-center mt-20 mb-5 font-badoni">
            THE AIRBORNE TACTICIANS
          </h1>
          <h1 className="text-yellow-300 font-bold text-3xl text-center font-badoni">
            NAVAL AIR OPERATIONS SCHOOL
          </h1>
          <div className="flex justify-center">
            <img className="w-36" src="assets/logo.svg" alt="Logo" />
          </div>
          <h1 className="text-white text-3xl font-bold text-center font-badoni">
            SEAKING 42B BOI
          </h1>
        </div>
        <div className="flex justify-between items-center mb-10 p-4">
          <div>
            <h1 className="text-white text-lg font-badoni">Project By</h1>
            <h1 className="text-white text-lg font-badoni">16 QNI</h1>
          </div>
          <Link to="/details">
            <img
              className="w-16 active:opacity-50"
              src="assets/forward_icon.svg"
              alt="Forward Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
