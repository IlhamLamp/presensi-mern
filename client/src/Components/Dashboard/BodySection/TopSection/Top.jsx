import React, {useState, useEffect} from 'react'
import './Top.css'
// import { BiSearchAlt } from 'react-icons/bi'
// import { TbMessageCircle } from 'react-icons/tb'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { BsArrowRightShort, BsQuestionCircle } from 'react-icons/bs'
import Modal from 'react-modal'
import Clock from './Clock'
import img from '../../../../Assets/user.png'
import img2 from '../../../../Assets/achievement.png'
import video from '../../../../Assets/video.mp4'
// import Zenitsu from '../../../../Assets/hello.gif'

const Top = () => {

  const [siswaData, setSiswaData] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem('siswaData');
    if (storedData) {
      setSiswaData(JSON.parse(storedData));
    }
  }, []);

  const namaSiswa = siswaData ? siswaData.nama : '';
  const nisnSiswa = siswaData ? siswaData.nisn : '';
  const kelasSiswa = siswaData ? siswaData.kode_kelas : '';
  const passwordSiswa = siswaData ? siswaData.password : '';
  const waliKelasSiswa = siswaData ? siswaData.nama_guru : '';

  // pop up
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      width: '300px',
      height: '150px',
    },
  };  


  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1><span className="smaduTitle">Sistem Presensi SMAN 2 Cibitung.</span></h1>
          <p>Selamat datang, {namaSiswa}</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
          {/* <TbMessageCircle className="icon" /> */}
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" onClick={openModal}/>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
          <h2>Data Siswa</h2>
          {/* <button onClick={closeModal}>Tutup</button> */}
          <p>Nama: {namaSiswa}</p>
          <p>NISN: {nisnSiswa}</p>
          <p>Kelas: {kelasSiswa}</p>
          <p>Password: {passwordSiswa}</p>
          <p>Wali Kelas: {waliKelasSiswa}</p>
        </Modal>
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
            <video src={video} autoPlay loop muted></video>
            {/* <img src={Zenitsu}/> */}
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