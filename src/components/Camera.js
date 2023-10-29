import React, { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Camera.css'

const Camera = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const [isRecording, setIsRecording] = useState(false);
  const [link, setLink] = useState(null);
  const [response, setResponse] = useState("The response will be here.");


  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.onstop = handleStop;

        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleStop = () => {
    const blob = new Blob(chunksRef.current, { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    const video = new File([blob], 'recorded_vid.mp4', {type: 'video/mp4' });
    console.log('Video Blob:', blob);
    console.log('Video URL:', url);
    setLink(url);

    const formData = new FormData();
    formData.append("video", video);
    formData.append("speaker", "yo mama");

    setResponse("test")

    fetch('http://127.0.0.1:5004/process_video', {
        method: 'POST',
        body: formData,
    }).then(response => response.json()).then(response => setResponse(response.response))
    chunksRef.current = [];
  };

  return (
    <div>
      <div className='camera-parent'>

        <div className='record-vid'>
          <video ref={videoRef} width={400} height={300} autoPlay playsInline muted />

          {isRecording ? (
            <Button sx={{ m: 2 }} className="cam-button" variant="contained" onClick={stopRecording}>Stop</Button>
          ) : (
            <Button sx={{ m: 2 }} className="cam-button" variant="contained" onClick={startRecording}>Record</Button>

          )}

        </div>

        {
          link != null ? (
            <video src={link} width={400} height={300} controls />
          ) : null
        }
        <h6>Results</h6>
        <div>        
          { response }
        </div>
        </div>
    </div>
  );
};

export default Camera;


/*
const Camera = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const [isRecording, setIsRecording] = useState(false);
  const [link, setLink] = useState(null);


  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        mediaRecorderRef.current.onstop = handleStop;

        mediaRecorderRef.current.start();
        setIsRecording(true);
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };



  const handleStop = () => {
    const blob = new Blob(chunksRef.current, { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    const video = new File([blob], 'recorded_vid.mp4', {type: 'video/mp4' });
    console.log('Video Blob:', blob);
    console.log('Video URL:', url);
    setLink(url);
    
    const formData = new FormData();
    formData.append("video", video);
    formData.append("speaker", "yo mama");

    fetch('http://127.0.0.1:5002/process_video', {
        method: 'POST',
        body: formData,
    }).then(response => response.json()).then(response => console.log(response))
    chunksRef.current = [];
  };

  return (
    <div>

      <video ref={videoRef} width={400} height={300} autoPlay playsInline muted />
      {isRecording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
        
      )}

      <video src={link} width={400} height={300} controls />
      <Link to="/">
        <button>
            Go back home
        </button>
      </Link>
    </div>
  );
};
*/