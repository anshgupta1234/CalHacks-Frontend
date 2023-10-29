
/*
export default function Camera() {

	<VideoRecorder
		onRecordingComplete={(videoBlob) => {
			const video = new File([videoBlob], 'recorded_vid.mp4', {type: 'video/mp4' });
			const formData = new FormData();
			formData.append("video", video);
			formData.append("speaker", "Celebrity");

			fetch('http://127.0.0.1:5002/process_video', {
				method: 'POST',
				body: formData,
			}).then(response => response.json()).then(response => console.log(response))
			this.state.current = [];
		}}
	/>
}
*/


import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

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