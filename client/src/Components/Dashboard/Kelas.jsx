import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import KelasBody from '../Dashboard/KelasSection/KelasBody'

const Kehadiran = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <KelasBody/>
            </div>
        </div>
    )
}

export default Kehadiran
