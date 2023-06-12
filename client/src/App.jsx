import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Kehadiran from './Components/Dashboard/Kehadiran';
import Login from './Components/Login/Login';
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
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
