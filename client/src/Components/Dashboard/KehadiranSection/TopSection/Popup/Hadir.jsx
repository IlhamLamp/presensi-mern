import React, {useRef, useEffect, useState} from 'react'
import './Hadir.css'


function Hadir(props) {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    
    const [hasPhoto, setHasPhoto] = useState(false);
    
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({video: {width: 800, height: 400}})
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error(err);
            })
    }
    
    useEffect(()=> {
        getVideo();
    }, [videoRef]);


  return (props.trigger) ? (
    <div className="hadir">
        <div className="hadir-inner">
            <div className="camera">
                <video ref={videoRef}></video>
                <button>SNAP!</button>
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button>CLOSE!</button>
            </div>
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Hadir