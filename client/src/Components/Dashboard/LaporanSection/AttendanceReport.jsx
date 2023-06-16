import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import attendanceData from './attendanceData';

const AttendanceReport = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const generatePDF = () => {
    if (!selectedMonth) {
      alert('Silakan pilih bulan terlebih dahulu.');
      return;
    }

    // Mengambil data kehadiran siswa berdasarkan bulan yang dipilih
    const monthData = attendanceData.find((data) => data.bulan === selectedMonth);
    if (!monthData) {
      alert('Data kehadiran untuk bulan yang dipilih tidak tersedia.');
      return;
    }

    // Membuat instance objek jsPDF
    const doc = new jsPDF();

    // Mengatur posisi awal judul
    const titleX = doc.internal.pageSize.getWidth() / 2;
    const titleY = 15;
    const titleOptions = {
      align: 'center',
      lineHeight: 1.5,
    };

    // Menggambar judul laporan
    doc.text(`Laporan Kehadiran Bulan ${selectedMonth} XMIPA1`, titleX, titleY, titleOptions);

    // Konfigurasi tabel laporan
    const tableColumn = ['ID', 'Nama', 'Hadir', 'Sakit', 'Izin', 'Alpa'];
    const tableRows = monthData.data.map((student) => [
      student.id,
      student.nama,
      student.hadir,
      student.sakit,
      student.izin,
      student.alpa,
    ]);

    // Menggambar tabel laporan menggunakan jspdf-autotable
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    // Menggambar tanda tangan
    const signatureX = doc.internal.pageSize.getWidth() - 20;
    const signatureY = doc.internal.pageSize.getHeight() - 40;
    doc.text('Mengetahui,', signatureX, signatureY, { align: 'right' });
    doc.text('Dwi Reknowati, M.Pd', signatureX, signatureY + 30, { align: 'right' });

    // Mengunduh file PDF
    doc.save(`laporan_kehadiran_${selectedMonth}.pdf`);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Pilih Bulan</option>
        {attendanceData.map((data) => (
          <option key={data.id} value={data.bulan}>
            {data.bulan}
          </option>
        ))}
      </select>
      <button className='btnUpdate' onClick={generatePDF}>Unduh Laporan PDF</button>
    </div>
  );
};

export default AttendanceReport;
