import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const TopLaporan = () => {

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Menu Laporan Kehadiran Bulanan Siswa.</h1>
          <p>Pilih bulan lalu unduh.</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Cari Dengan Nama' />
          <BiSearchAlt className="icon" />
        </div>
      </div>
    </div>
  )
}

export default TopLaporan