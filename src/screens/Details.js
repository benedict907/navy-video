import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
const Details = () => {
  const [videoClicked, setVideoClicked] = useState({
    title: '01. Introduction',
    url: 'assets/module_1.mp4',
    thumbnail: 'assets/thumbnail_1.svg'
  })
  const [playing, setPlaying] = useState(false)
  const videoList = [
    {
      title: '01. Introduction',
      url: 'assets/module_1.mp4',
      thumbnail: 'assets/thumbnail_1.svg'
    },
    {
      title: '02.⁠ ⁠What Happened ?',
      url: 'assets/module_2.mp4',
      thumbnail: 'assets/thumbnail_2.svg'
    },
    {
      title: '03.⁠ ⁠Finding',
      url: 'assets/module_3.mp4',
      thumbnail: 'assets/thumbnail_3.svg'
    },
    {
      title: '04.⁠ Recommendations',
      url: 'assets/module_4.mp4',
      thumbnail: 'assets/thumbnail_3.svg'
    }
  ]
  const handleKeyDown = event => {
    if (event.code === 'Space') {
      setPlaying(prev => !prev)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [playing, setPlaying])

  return (
    <div
      style={{
        backgroundImage: `url("assets/home_page.svg")`,
        backgroundSize: 'cover', // Change this to 'contain', 'auto', or specific dimensions as needed
        backgroundRepeat: 'no-repeat', // Ensures the image does not repeat
        backgroundPosition: 'center' // Centers the image
      }}
      className="h-full w-full flex flex-col px-10 pt-10 overflow-hidden"
    >
      <Link to="/">
        <img
          className="w-16 active:opacity-50 rotate-180"
          src="assets/forward_icon.svg"
          alt="back-icon"
        />
      </Link>
      <div className="flex justify-between items-center h-screen">
        <div className="w-3/4 h-screen">
          <ReactPlayer
            url={videoClicked.url}
            playing={playing}
            width={'100%'}
            height={'90%'}
            loop={false}
            controls={true}
          />
          <h1 className="text-white font-badoni text-lg mt-2">
            {videoClicked.title}
          </h1>
        </div>
        <div className="flex-col pb-20 w-1/4 ms-10 h-full overflow-y-auto">
          {videoList.map(item => (
            <div
              key={item.url}
              onClick={() => {
                setPlaying(false)
                setVideoClicked(item)
              }}
              className={`border ${videoClicked.url === item.url ? 'border-yellow-400' : 'border-gray-50'} rounded-lg mb-10 active:opacity-50`}
            >
              <img alt="thumbnail" src={item.thumbnail} />
              <div className="px-2 flex my-1 items-center">
                <h1 className="text-white text-xs mr-2 font-badoni">
                  {item.title}
                </h1>
                <img
                  alt="play-button"
                  className="w-6"
                  src={'assets/play_button.svg'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
