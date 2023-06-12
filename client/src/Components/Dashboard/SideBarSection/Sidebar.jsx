import React from 'react'
import './sidebar.css'
import logo from '../../../Assets/logo.png'
import { BsQuestionCircle } from 'react-icons/bs'
import { AiFillSchedule, AiFillFolderAdd, AiFillBank, AiFillDashboard, AiFillCamera } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/dashboard" className="menuLink flex">
              <AiFillDashboard className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/dashboard/kehadiran" className="menuLink flex">
              <AiFillCamera className="icon" />
              <span className="smallText">
                Kehadiran
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiFillBank className="icon" />
              <span className="smallText">
                Kelas
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiFillSchedule className="icon" />
              <span className="smallText">
                Laporan
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiFillFolderAdd className="icon" />
              <span className="smallText">
                Data Siswa
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

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
  )
}

export default Sidebar