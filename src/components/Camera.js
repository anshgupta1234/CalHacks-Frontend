import userEvent from '@testing-library/user-event';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.mediaRecorderRef = React.createRef();
    this.chunks = [];
    this.state = {
      isRecording: false,
      link: null,
    };
  }

  startRecording = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.state.videoRef.current.srcObject = stream;
        
        this.state.mediaRecorderRef.current = new MediaRecorder(stream);
        this.state.mediaRecorderRef.current.ondataavailable = this.handleDataAvailable;
        this.state.mediaRecorderRef.current.onstop = this.handleStop;

        this.state.mediaRecorderRef.current.start();
        this.setState({isRecording: true});
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  };
  stopRecording = () => {
    this.state.mediaRecorderRef.current.stop();
    this.setstate({isRecording: false});
  };
  handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      this.chunks.push(event.data);
    }
  };
  handleStop = () => {
    const blob = new Blob(this.chunks, { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    const video = new File([blob], 'recorded_vid.mp4', {type: 'video/mp4' });
    console.log('Video Blob:', blob);
    console.log('Video URL:', url);
    this.setState({link:url});
    
    const formData = new FormData();
    formData.append("video", video);
    formData.append("speaker", "yo mama");

    fetch('http://127.0.0.1:5002/process_video', {
        method: 'POST',
        body: formData,
    }).then(response => response.json()).then(response => console.log(response))
    this.state.current = [];
  };
  render(){
    return (
      <div>

        <video ref={this.videoRef} width={400} height={300} autoPlay playsInline muted />
        {this.state.isRecording ? (
          <button onClick={this.stopRecording}>Stop Recording</button>
        ) : (
          <button onClick={this.startRecording}>Start Recording</button>
          
        )}

        <video src={this.state.link} width={400} height={300} controls />
        <Link to="/">
          <button>
              Go back home
          </button>
        </Link>
      </div>
  );};
};



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
export default Camera;