import React from 'react'
import '../BodyContent.css'
import TopDataSiswa from './TopSection/TopDataSiswa' 

const DataSiswaBody = () => {
  return (
    <div className='mainContent'>
      <TopDataSiswa/>
      <div className="bottom flex">
        {/* <ListingKelas/> */}
      </div>
    </div>
  )
}

export default DataSiswaBody