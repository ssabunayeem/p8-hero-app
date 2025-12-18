import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className=' w-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout




{/* md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 */ }