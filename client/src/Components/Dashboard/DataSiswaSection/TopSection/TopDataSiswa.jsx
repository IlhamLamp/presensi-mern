import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const TopDataSiswa = () => {

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Menu Data Siswa.</h1>
          <p>Tabel.</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Cari Dengan Nama' />
          <BiSearchAlt className="icon" />
        </div>
      </div>
    </div>
  )
}

export default TopDataSiswa