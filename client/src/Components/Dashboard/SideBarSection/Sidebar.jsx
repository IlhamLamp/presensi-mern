import React from 'react'
import './sidebar.css'
import LogoSekolah from '../../../Assets/logo-sekolah.png'
import { BsQuestionCircle } from 'react-icons/bs'
import { AiFillSchedule, AiFillFolderAdd, AiFillBank, AiFillDashboard, AiFillCamera } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      {/* LOGO */}
      <div className="logoDiv flex">
        <img src={LogoSekolah} alt="Logo" />
        <h2>Smadu.</h2>
      </div>

      {/* QUICK MENU */}
      <div className="menuDiv">
        <h3 className="divTitle">
          • MENU UTAMA •	
        </h3>

        {/* MENU COMPONENT */}
        <ul className="menuLists grid">
          {/*  */}
          <li className="listItem">
            <a href="/dashboard" className="menuLink flex">
              <AiFillDashboard className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>
          {/*  */}
          <li className="listItem">
            <a href="/dashboard/kehadiran" className="menuLink flex">
              <AiFillCamera className="icon" />
              <span className="smallText">
                Kehadiran
              </span>
            </a>
          </li>
          {/*  */}
          <li className="listItem">
            <a href="/dashboard/kelas" className="menuLink flex">
              <AiFillBank className="icon" />
              <span className="smallText">
                Kelas
              </span>
            </a>
          </li>
          {/*  */}
          <li className="listItem">
            <a href="/dashboard/laporan" className="menuLink flex">
              <AiFillSchedule className="icon" />
              <span className="smallText">
                Laporan
              </span>
            </a>
          </li>
          {/*  */}
          <li className="listItem">
            <a href="/dashboard/data-siswa" className="menuLink flex">
              <AiFillFolderAdd className="icon" />
              <span className="smallText">
                Data Siswa
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* SETTINGS */}
      <div className="settingsDiv">
        <h3 className="divTitle">
        •	PENGATURAN •	
        </h3>
        <ul className="menuLists grid">
          {/*  */}
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
          <h3>Pusat Bantuan</h3>
          <p>Mengalami masalah di Presensi SMADU? silahkan hubungi kami untuk pertanyaan lebih lanjut.</p>
          <button className="btn">Klik Disini</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar