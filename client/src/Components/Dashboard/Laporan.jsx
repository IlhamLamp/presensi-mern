import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import LaporanBody from './LaporanSection/LaporanBody'

const Kehadiran = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <LaporanBody/>
            </div>
        </div>
    )
}

export default Kehadiran
