import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className=' w-full pt-20'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout

