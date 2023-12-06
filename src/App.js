import React, { useState } from "react";
import logo from "./assets/JS.jpg";
import axios from "axios";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const App = () => {
  const [estimProps, setEstimProps] = useState({
    progress: null,
    estimated: null,
    total: null,
    loaded: null,
  });
  const { progress, estimated, total, loaded } = estimProps;
  const [clicked, setClicked] = useState(false);
  const handleDownload = async () => {
    setClicked(true);
    const res = await axios.get(
      "https://player.vimeo.com/progressive_redirect/playback/670182910/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=0d2dd005fd1b8bdf1ccc6e3239ca01e00e3863ed9ab394c9612ecd3a797566cb",
      {
        responseType: "Video",
        onDownloadProgress: (progressEvent) => {
          //console.log(progressEvent);
          setEstimProps({
            ...estimProps,
            progress: Math.floor(
              (progressEvent.loaded / progressEvent.total) * 100
            ),
            estimated: progressEvent.estimated
              ? Math.floor(progressEvent.estimated)
              : null,
            total: progressEvent.total,
            loaded: progressEvent.loaded,
          });
        },
      }
    );
  };
  console.log(progress, estimated, total, loaded);

  const Est = () => {
    const temp = estimated;
    return <div className="remain">Remain: {estimated} seconds</div>;
  };
  return (
    <div className="w-[100vw]  h-screen my-0 px-4 flex  justify-center">
      <div className="mt-[5rem]">
        <h2 className="mb-5 font-bold text-center text-[22px]">
          Realistic-Lively Download Progress Bar
        </h2>
        <img src={logo} alt="" className="w-[600px] h-[338px] " />
        <div className="flex items-center gap-4 w-full">
          <button
            className="text-white font-bold bg-blue-500 btn"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
        {clicked && loaded && total && (
          <div className="progress relative">
            <div
              style={{ background: "green", width: `${progress}%` }}
              className="progBar"
            ></div>

            <>
              <div className="spanBox">
                <span>{loaded} mb</span>
                <span className="mx-1">/</span>
                <span>{total}mb</span>
              </div>
              <div className="perc">{progress}%</div>
            </>
          </div>
        )}
        {clicked && !loaded && !total && (
          <div className="downloading">Download Starting...</div>
        )}
        {estimated && <Est />}
      </div>
    </div>
  );
};

export default App;
