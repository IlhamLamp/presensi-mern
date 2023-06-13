import React from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import img from '../../../../Assets/user.png'

const ListingKelas = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>Data Kehadiran Harian Siswa Kelas</h1>
        <button className="btn flex">
          6/6/2023 <BsArrowDownShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Annual Vince</h3>
          <p>Hadir</p>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Coffe Plant</h3>
          <p>Belum Hadir</p>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Button Fern</h3>
          <p>Belum Hadir</p>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
          <p>Hadir</p>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
          <p>Hadir</p>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>

        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>

        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>
    </div>
  )
}

export default ListingKelas