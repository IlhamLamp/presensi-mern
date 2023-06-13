import React from 'react'
import '../BodyContent.css'
import TopKehadiran from './TopSection/TopKehadiran'

const Body = () => {
  return (
    <div className='mainContent'>
      <TopKehadiran/>
      <div className="bottom flex">
        Status Kehadiranmu hari ini : HADIR
      </div>
    </div>
  )
}

export default Body