import React from 'react';
import './ListingLaporan.css'

const ListingLaporan = ({ students, onDelete, onEdit }) => {
  return (
    <div className='tableBorder'>
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
                {students.map((student, index) => (
                <tr key={student.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td>{student.id}</td>
                    <td>{student.nama}</td>
                    <td>{student.kelas}</td>
                    <td>{student.nisn}</td>
                    <td>
                        <div className='btnAction'>
                            <button className='btnUpdate' onClick={() => onEdit(student)}>Ubah</button>
                            <button className='btnDelete' onClick={() => onDelete(student.id)}>Hapus</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListingLaporan;
