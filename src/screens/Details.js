import React from "react";
import ReactPlayer from "react-player";

const Details = () => {
  const videoList = ["","",""]
  return (
    <div>
      {/* <h1>Details Page</h1>
      <Link to="/">Go to Home</Link> */}
      {videoList.map((item=>  <img className="w-1/2 h-full rounded-lg" src="/sliderImages/3.svg" />))}
      <ReactPlayer
        url="/sample_video.mp4"
        playing={true}
        loop={false}
        controls={true}
      />
    </div>
  );
};

export default Details;
