import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import KehadiranBody from '../Dashboard/KehadiranSection/KehadiranBody'

const Kehadiran = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <KehadiranBody/>
            </div>
        </div>
    )
}

export default Kehadiran
