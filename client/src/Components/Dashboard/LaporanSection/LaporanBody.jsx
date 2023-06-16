import React from 'react'
import '../BodyContent.css'
import TopLaporan from './TopSection/TopLaporan'
import ListingLaporan from './ListingSection/ListingLaporan'
import AttendanceReport from './AttendanceReport'
import attendanceData from './attendanceData'

const LaporanBody = () => {
  
  return (
    <div className='mainContent'>
      <TopLaporan/>

        <div className="bottom-flex">
          <AttendanceReport attendanceData={attendanceData}/>
          {/* <ListingLaporan/> */}
        </div>
    </div>
  )
}

export default LaporanBody