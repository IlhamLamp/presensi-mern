import React from 'react'
import '../BodyContent.css'
import TopLaporan from './TopSection/TopLaporan'
import AttendanceReport from './AttendanceReport'
import attendanceData from './attendanceData'

const LaporanBody = () => {
  
  return (
    <div className='mainContent'>
      <TopLaporan/>
        <div className="bottom-flex">
          <div className="app">
            <div className="form-container">
                <AttendanceReport attendanceData={attendanceData}/>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default LaporanBody