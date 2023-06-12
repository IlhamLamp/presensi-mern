import React, {useState} from 'react'
import './Hadir.css'
import PopUpWebcam from './PopUpWebcam';


function Hadir(props) {

    const [showWebcam, setShowWebcam] = useState(false);

    const openWebcam = () => {
        setShowWebcam(true);
    };

    const closeWebcam = () => {
        setShowWebcam(false);
    };


  return (props.trigger) ? (
    <div className="hadir">
        <div className="hadir-inner">
            <button onClick={openWebcam}>Buka Kamera</button>
            {showWebcam && <PopUpWebcam handleClose={closeWebcam} />}
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Hadir