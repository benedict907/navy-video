import React from 'react'
import ReactPlayer from 'react-player'

const Details = () => {
  const videoList = ['', '', '', '', '', '', '', '', '']
  return (
    <div
      style={{ backgroundImage: `url("assets/sliderImages/3.svg")` }}
      className="h-screen w-screen bg-blue-500 flex p-10 justify-between"
    >
      {/* <h1>Details Page</h1>
      <Link to="/">Go to Home</Link> */}
      {/* <div className="flex w-full"> */}
      {/* <div className="w-1/2 bg-blue-600"> */}
      <div className="flex mt-10">
        <ReactPlayer
          url="assets/sample_video.mp4"
          playing={false}
          loop={false}
          controls={true}
        />

        {/* </div> */}
        <div className="flex-col w-1/4 ms-10 overflow-scroll">
          {videoList.map(item => (
            <div className="border border-gray-50 rounded-lg mt-5 active:opacity-50">
              <img className="" src="assets/sliderImages/3.svg" />
              <div className="px-2">
                <h1 className="text-white">01 Prelude</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Details
