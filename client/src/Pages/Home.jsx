import React, { useState, useEffect } from 'react';
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder"; 
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [recordingType, setRecordingType] = useState("video"); 
  const [userName, setUserName] = useState("");

  const handleLoginClick = () => {
    navigate("/");
  };

  useEffect(() => {
  
    if (token) {
      const userEmail=localStorage.getItem("email")
      const userName = userEmail.split('@')[0];
      setUserName(userName);
     
    }
  }, [token]);

  const {
    status: recordingStatus,
    startRecording,
    stopRecording,
    mediaBlobUrl: recordingUrl
  } = useReactMediaRecorder({ video: recordingType === "video", screen: recordingType === "screen" });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4">Video Recorder</h1>
        {userName && <p>Welcome, {userName}!</p>}
        <div className="mb-4">
          <p className="mb-2">{status}</p>
          {token ? (
            <>
              {recordingType === "video" && (
                <>
                  <button
                    onClick={startRecording}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                  >
                    Start Video Recording
                  </button>
                  <button
                    onClick={stopRecording}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Stop Recording
                  </button>
                </>
              )}
              {recordingType === "screen" && (
                <>
                  <button
                    onClick={startRecording}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
                  >
                    Start Screen Recording
                  </button>
                  <button
                    onClick={stopRecording}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    Stop Recording
                  </button>
                </>
              )}
            </>
          ) : (
            <button
              onClick={handleLoginClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Please login to start recording
            </button>
          )}
          <div className="mt-4">
            {recordingUrl && (
              <video
                src={recordingUrl}
                controls
                autoPlay
                loop
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setRecordingType("video")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          >
            Record Video
          </button>
          <button
            onClick={() => setRecordingType("screen")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Record Screen
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
