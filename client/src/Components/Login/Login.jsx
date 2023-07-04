import React, { useEffect, useState } from 'react';
import '../../App.css'
import SiswaProfile from '../SiswaProfile';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo-sekolah.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
    const [loginNisn, setLoginNisn] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');

    const loginSiswa = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            LoginNisn: loginNisn,
            LoginPassword: loginPassword
        }).then((response) => {
            console.log();
            if (response.data.message || loginNisn == '' || loginPassword ==  '') {
                navigateTo('/') 
                setLoginStatus(`Nisn atau password salah!`)
            }
            else {
                const siswaData = response.data[0]
                localStorage.setItem('siswaData', JSON.stringify(siswaData))
                console.log('Login Succesfully!')
                navigateTo('/dashboard')
            }
        })
    }

    useEffect(() => {
        if (loginStatus !== '') {
            setStatusHolder('showMessage') 
            setTimeout(() => {
                setStatusHolder('message')
            }, 2000);
        }
    }, [loginStatus])

    const onSubmit = () => {
        setLoginNisn('')
        setLoginPassword('')
    }

    return (
        <div className="loginPage flex">
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">SMAN 2 CIBITUNG</h2>
                        <p>Kp,sasakbakar,Desa,Kec.Kab Kertamukti Cibitung, Bekasi, Kertamukti, Kec. Cibitung</p>
                    </div>

                    <div className="footerDiv flex">
                        <span className="text">Belum memiliki akun?</span>
                        <Link to={'/register'}>
                            <button className="btn">Daftar</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image"/>
                        <h3>Halaman Login Siswa</h3>
                    </div>

                    <form action="" className="form grid" onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>

                        <div className="inputDiv">
                            <label htmlFor="nisn">NISN</label>
                            <div className="input flex">
                                <FaUserShield className="icon" />
                                <input type="text" id='nisn' placeholder='Masukkan NISN'
                                    onChange={(event) => setLoginNisn(event.target.value)} />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id='password' placeholder='Masukkan Password'
                                    onChange={(event) => setLoginPassword(event.target.value)} />
                            </div>
                        </div>

                        <button type='submit' className='btn flex' onClick={loginSiswa}>
                            <span>Masuk</span>
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

export default Login