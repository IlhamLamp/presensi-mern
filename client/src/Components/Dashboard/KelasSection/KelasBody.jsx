import React from 'react'
import '../BodyContent.css'
import TopKelas from './TopSection/TopKelas'
import ListingKelas from './ListingSection/ListingKelas'
import KelasActivity from './ActivitySection/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
      <TopKelas/>
      <div className="bottom flex">
        <ListingKelas/>
        <KelasActivity/>
      </div>
    </div>
  )
}

export default Body