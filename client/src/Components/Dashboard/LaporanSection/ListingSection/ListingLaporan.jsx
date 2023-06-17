import React, { useState } from 'react';
import './ListingLaporan.css'

const ListingLaporan = ({attendances}) => {

  return (

    <div className='tableBorder'>
        <table className="student-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Hadir</th>
                <th>Sakit</th>
                <th>Izin</th>
                <th>Alpa</th>
                </tr>
            </thead>
            <tbody>
                {attendances.map((attendance, index) => (
                <tr key={attendance.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td>{attendance.id}</td>
                    <td>{attendance.nama}</td>
                    <td>{attendance.hadir}</td>
                    <td>{attendance.sakit}</td>
                    <td>{attendance.izin}</td>
                    <td>{attendance.alpa}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListingLaporan;
