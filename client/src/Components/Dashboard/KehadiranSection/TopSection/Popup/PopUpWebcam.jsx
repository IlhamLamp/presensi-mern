import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './Hadir.css'

const PopUpWebcam = ({ handleClose }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Webcam Capture</h2>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <button onClick={captureImage}>Capture</button>
        <button onClick={handleClose}>Close</button>
        {capturedImage && (
          <div>
            <h3>Captured Image:</h3>
            <img src={capturedImage} alt="Captured" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUpWebcam;
