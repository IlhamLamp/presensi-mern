import React, {useState} from 'react'
import '../BodyContent.css'
import TopDataSiswa from './TopSection/TopDataSiswa' 
import ListingDataSiswa from './ListingSection/ListingDataSiswa'

const DataSiswaBody = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ id: '', nama: '', kelas: '', nisn: '' });
  const [editData, setEditData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateNewId = () => {
    if (students.length === 0) {
      return '1'; // Set ID awal sebagai '1' jika tidak ada siswa
    }
  
    const lastStudentId = students[students.length - 1].id;
    const newId = parseInt(lastStudentId) + 1;
    return newId.toString();
  };

  const handleAddStudent = () => {
    const newStudent = { ...formData, id: generateNewId() };
    setStudents([...students, newStudent]);
    setFormData({ id: '', nama: '', kelas: '', nisn: '' });
  };

  const handleEditStudent = (student) => {
    setEditData(student);
    setFormData({
      id: student.id,
      nama: student.nama,
      kelas: student.kelas,
      nisn: student.nisn,
    });
  };

  const handleUpdateStudent = () => {
    const updatedStudent = {
      id: formData.id,
      nama: formData.nama,
      kelas: formData.kelas,
      nisn: formData.nisn,
    };

    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );

    setStudents(updatedStudents);
    setEditData(null);
    setFormData({ id: '', nama: '', kelas: '', nisn: '' });
  };

  const handleDeleteStudent = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };
  return (
    <div className='mainContent'>
      <TopDataSiswa/>

        <div className="app">
          <div className="form-container">
            {editData ? 
              (
              <div className='table-container'>
                <h2>Edit Data Siswa</h2>
                <form>
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nama"
                    placeholder="Masukkan Nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="kelas"
                    placeholder="Masukkan Kelas"
                    value={formData.kelas}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nisn"
                    placeholder="Masukkan Nisn"
                    value={formData.nisn}
                    onChange={handleInputChange}
                  />
                  <button className='btnUpdate' type="button" onClick={handleUpdateStudent}>
                    Simpan
                  </button>
                </form>
              </div>
              ) : (
              <div className='table-container'>
                <h2>Tambah Siswa</h2>
                <form>
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nama"
                    placeholder="Masukkan Nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="kelas"
                    placeholder="Masukkan Kelas"
                    value={formData.kelas}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    className="formInputSiswa"
                    name="nisn"
                    placeholder="Masukkan Nisn"
                    value={formData.nisn}
                    onChange={handleInputChange}
                  />
                  <button className='btnAdd' type="button" onClick={handleAddStudent}>
                    Tambah
                  </button>
                </form>
              </div>
              )
            }
          </div>
          <ListingDataSiswa
            students={students}
            onDelete={handleDeleteStudent}
            onEdit={handleEditStudent}
          />
        </div>
    </div>
  )
}

export default DataSiswaBody