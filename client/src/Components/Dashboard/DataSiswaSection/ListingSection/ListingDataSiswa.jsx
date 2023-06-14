import React from 'react';
import './ListingDataSiswa.css';

const ListingDataSiswa = ({ students, onDelete, onEdit }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Nisn</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.nama}</td>
            <td>{student.kelas}</td>
            <td>{student.nisn}</td>
            <td>
                <div className='btnAction'>
                    <button onClick={() => onDelete(student.id)}>Hapus</button>
                    <button onClick={() => onEdit(student)}>Edit</button>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListingDataSiswa;
