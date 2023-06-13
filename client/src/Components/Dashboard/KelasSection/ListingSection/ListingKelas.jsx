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
          <h3>Aida Nur Haqiqi	</h3>
          <p>Hadir</p>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Alya Islamiati Putri	</h3>
          <p>Belum Hadir</p>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Aprila Avriani</h3>
          <p>Belum Hadir</p>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Belda Nurmultiefa</h3>
          <p>Hadir</p>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Bella Febriani</h3>
          <p>Hadir</p>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Bita Kausari</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Candra Permana</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Cynthia Detifiany</h3>
        </div>
        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Danindra Armina</h3>
        </div>
        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Denanda Fauziah</h3>
        </div>

        
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Devi Sri Wahyuni</h3>
        </div>

        
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Diky Ginanjar	</h3>
        </div>
      </div>
    </div>
  )
}

export default ListingKelas