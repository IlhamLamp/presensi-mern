import React from 'react'
import '../../App.css'
import Sidebar from '../Dashboard/SideBarSection/Sidebar'
import DataSiswaBody from './DataSiswaSection/DataSiswaBody'

const DataSiswa = () => {
    return (
        <div className="dashboard flex">
            <div className="dashboardContainer flex">
                <Sidebar/>
                <DataSiswaBody/>
            </div>
        </div>
    )
}

export default DataSiswa
