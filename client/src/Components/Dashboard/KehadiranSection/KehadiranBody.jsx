import React from 'react'
import '../BodyContent.css'
import TopKehadiran from './TopSection/TopKehadiran'

const Body = () => {
  return (
    <div className='mainContent'>
      <TopKehadiran/>
      <div className="bottom flex">
        <h3>Status Kehadiranmu hari ini : <span className='btnUpdate'>HADIR</span> </h3>
      </div>
    </div>
  )
}

export default Body