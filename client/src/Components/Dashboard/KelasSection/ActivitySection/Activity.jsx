import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import user from '../../../../Assets/user.png'

const KelasActivity = () => {
    return (
      <div className="activitySection">
        <div className="heading flex">
          <h1>Kehadiran Terakhir</h1>
          <button className="btn flex">
            See All
            <BsArrowRightShort className="icon" />
          </button>
        </div>
  
        <div className="secContainer grid">
          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Diky Ginanjar</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              2 min ago
            </div>
          </div>
  
          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Denanda Fauziah</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              3 min ago
            </div>
          </div>
  
          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Bella Febriani</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              5 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Aida Nur Haqiqi</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              7 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Belda Nurmultiefa</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              11 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Danindra Armina</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              12 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Candra Permana</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              12 min ago
            </div>
          </div>

          <div className="singleCustomer flex">
            <img src={user} alt="Customer Image" />
            <div className="customerDetails">
              <span className="name">Devi Sri Wahyuni</span>
              <small>hadir</small>
            </div>
            <div className="duration">
              15 min ago
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default KelasActivity