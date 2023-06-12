import React from 'react'
import './kelasBody.css'
import TopKelas from './TopSection/TopKelas'
import ListingKelas from './ListingSection/ListingKelas'

const Body = () => {
  return (
    <div className='mainContent'>
      <TopKelas/>
      <div className="bottom flex">
        <ListingKelas/>
      </div>
    </div>
  )
}

export default Body