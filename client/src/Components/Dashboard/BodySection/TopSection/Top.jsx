import React from 'react'
import './Top.css'
// import { BiSearchAlt } from 'react-icons/bi'
// import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import Clock from './Clock'
import img from '../../../../Assets/user.png'
import img2 from '../../../../Assets/achievement.png'
import Zenitsu from '../../../../Assets/hello.gif'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1><span className="smaduTitle">Sistem Presensi SMAN 2 Cibitung.</span></h1>
          <p>Selamat datang, User!</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
          {/* <TbMessageCircle className="icon" /> */}
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1><Clock/></h1>
          {/* <p>The world's fast growing industry today are natural made products!</p> */}

          {/* <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div> */}

          <div className="videoDiv">
            {/* <video src={video} autoPlay loop muted></video> */}
            <img src={Zenitsu}/>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Status Kehadiran</h1>

              <div className="flex">
                <span>
                  Hari Ini <br /> <small>Hadir</small>
                </span>
                <span>
                  Catatan <br /> <small>-</small>
                </span>
              </div>

              <a href="/dashboard/kehadiran" className="menuLink">
                <span className="flex link">
                  Absen dengan foto <BsArrowRightShort className="icon" />
                </span>
              </a>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>
            {/* We Shall use this card later */}
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble in Planti, please contact us from for more questions.</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top