import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo-sekolah.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight, AiFillBank } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'

const Register = () => {
    const [nisn, setNisn] = useState('')
    const [nama, setNama] = useState('')
    const [kelas, setKelas] = useState('')
    const [password, setPassword] = useState('')
    const navigateTo = useNavigate();

    const createSiswa = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3002/register', {
            Nisn: nisn,
            Nama: nama,
            Kelas: kelas,
            Password: password
        }).then(() => {
            navigateTo('/');
            setNisn('');
            setNama('');
            setKelas('');
            setPassword('');
        })
    }

    return (
        <div className="registerPage flex">
            <div className="container flex">

                <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">SMAN 2 CIBITUNG</h2>
                        <p>Kp,sasakbakar,Desa,Kec.Kab Kertamukti Cibitung, Bekasi, Kertamukti, Kec. Cibitung</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Sudah memiliki akun ?</span>
                        <Link to={'/'}>
                            <button className="btn">Masuk</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Halaman Registrasi Siswa</h3>
                    </div>

                    <form action="" className="form grid">

                        <div className="inputDiv">
                            <label htmlFor="nisn">NISN</label>
                            <div className="inputReg flex">
                                <MdMarkEmailRead className="icon" />
                                <input type="nisn" id='nisn' placeholder='Masukkan NISN'
                                    onChange={(event) => setNisn(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="nama">Nama</label>
                            <div className="inputReg flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='nama' placeholder='Masukkan Nama'
                                    onChange={(event) => setNama(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="kelas">Kelas</label>
                            <div className="inputReg flex">
                                <AiFillBank className="icon" />
                                <input type="text" id='kelas' placeholder='Masukkan Kelas'
                                    onChange={(event) => setKelas(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="inputReg flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='password' placeholder='Masukkan Password'
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={createSiswa}>
                            <span>Daftar</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        <span className="forgotPassword">
                            Lupa Password? <a href="">Klik Disini</a>
                        </span>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register;