import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import img from '../../../../Assets/wali-kelas.jpg'

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Menu Data Harian Kelas.</h1>
          <p>Lihat Data Kehadiranmu Hari Ini!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Cari Dengan Nama' />
          <BiSearchAlt className="icon" />
        </div>

      </div>

      <div className="cardSection flex">

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>Dwi Reknowati, M.Pd</h1>
              <h1>2025252118-XXXX</h1>

              <div className="flex">
                <span>Wali Kelas</span>
                <span><small>10MIPA1</small></span>
              </div>
            </div>

            <div className="imgDiv">
              <img src={img} alt="Image Name" />
            </div>
            {/* We Shall use this card later */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top