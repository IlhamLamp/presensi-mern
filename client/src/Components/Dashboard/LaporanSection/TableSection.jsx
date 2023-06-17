import React, {useState} from 'react'
import ListingLaporan from './ListingSection/ListingLaporan'

const TableSection = () => {

  return (
        <div className="app">
          <div className="form-container">
            {/* <ListingLaporan/> */}
          {/* <div className='table-container'>
                <h2>Edit Data Siswa</h2>
                <form>
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nama"
                    placeholder="Masukkan Nama"
                    // value={formData.nama}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="kelas"
                    placeholder="Masukkan Kelas"
                    // value={formData.kelas}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nisn"
                    placeholder="Masukkan Nisn"
                    // value={formData.nisn}
                  />
                  <button className='btnUpdate' type="button">
                    Simpan
                  </button>
                </form>
              </div> */}
          </div>
          {/* <ListingLaporan
            students={students}
          /> */}
        </div>
  )
}

export default TableSection