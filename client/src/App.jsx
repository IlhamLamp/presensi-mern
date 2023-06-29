import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Kehadiran from './Components/Dashboard/Kehadiran';
import Kelas from './Components/Dashboard/Kelas';
import Laporan from './Components/Dashboard/Laporan';
import DataSiswa from './Components/Dashboard/DataSiswa';
import Login from './Components/Login/Login';
import LoginGuru from './Components/Login/LoginGuru';
import Register from './Components/Register/Register';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/guru',
    element: <div><LoginGuru/></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/dashboard/kehadiran',
    element: <div><Kehadiran/></div>
  },
  {
    path: '/dashboard/kelas',
    element: <div><Kelas/></div>
  },
  {
    path: '/dashboard/laporan',
    element: <div><Laporan/></div>
  },
  {
    path: '/dashboard/data-siswa',
    element: <div><DataSiswa/></div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
