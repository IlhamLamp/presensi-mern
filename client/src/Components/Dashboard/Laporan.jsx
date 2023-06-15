import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
// import LaporanBody from './LaporanSection/LaporanBody'
import AttendanceReport from './LaporanSection/AttendanceReport'
import attendanceData from './LaporanSection/attendanceData'

const Kehadiran = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                {/* <LaporanBody/> */}
                <AttendanceReport attendanceData={attendanceData}/>
            </div>
        </div>
    )
}

export default Kehadiran
