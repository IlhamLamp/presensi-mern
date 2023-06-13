import React, { useState } from 'react'
import { BsArrowRightShort, BsFillCameraFill, BsPersonFillExclamation, BsCapsule, BsClockFill } from 'react-icons/bs'
import Hadir from './Popup/Hadir'

const TopKehadiran = () => {

  // popup
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Menu Kehadiran Siswa.</h1>
          <p>Pilih Menu dibawah ini!</p>
        </div>
      </div>

      <div className="cardSection flex">

        {/* Hadir */}
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <BsFillCameraFill className='icon'/>
              <h1>Hadir</h1>
              <div className="flex">
                <span>
                  Beri Izin<br /> <small>Menggunakan Kamera</small>
                </span>
              </div>
              <span className="flex link" onClick={() => setButtonPopup(true)}>
                Klik Disini <BsArrowRightShort className="icon" />
              </span>
              {/* POPUP */}
              <Hadir trigger={buttonPopup} setTrigger={setButtonPopup}></Hadir>
              {/*  */}
            </div>
          </div>
        </div>
        {/* Izin */}
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <BsPersonFillExclamation className='icon'/>
              <h1>Izin</h1>
              <div className="flex">
                <span>
                  Tulis Keterangan kamu<br />
                </span>
              </div>
              <span className="flex link">
                Klik Disini <BsArrowRightShort className="icon" />
              </span>
            </div>
          </div>
        </div>
        {/* Sakit */}
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <BsCapsule className='icon'/>
              <h1>Sakit</h1>
              <div className="flex">
                <span>
                  Tulis Keterangan kamu<br />
                </span>
              </div>
              <span className="flex link">
                Klik Disini <BsArrowRightShort className="icon" />
              </span>
            </div>
          </div>
        </div>
        {/* Dispensasi */}
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <BsClockFill className='icon'/>
              <h1>Dispensasi</h1>
              <div className="flex">
                <span>
                  Tulis Keterangan kamu<br />
                </span>
              </div>
              <span className="flex link">
                Klik Disini <BsArrowRightShort className="icon" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopKehadiran