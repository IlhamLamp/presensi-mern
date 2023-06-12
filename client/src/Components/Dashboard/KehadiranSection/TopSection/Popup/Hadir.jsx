import React, {useState} from 'react'
import './Hadir.css'
import PopUpWebcam from './PopUpWebcam';


function Hadir(props) {

    // webcam
    const [showWebcam, setShowWebcam] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const openWebcam = () => {
        setShowWebcam(true);
        setShowButton(false);
    };
    const closeWebcam = () => {
        setShowWebcam(false);
        setShowButton(true);
    };


  return (props.trigger) ? (
    <div className="hadir">
        <div className="hadir-inner">
            {showButton && <button onClick={openWebcam}>Buka Kamera</button>}
            {showWebcam && <PopUpWebcam handleClose={closeWebcam} />}
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>Tutup</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Hadir