import SideBar from '@/components/SideBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <SideBar />
        <div className="flex-1">
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
