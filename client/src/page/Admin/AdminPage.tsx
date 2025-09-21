import LeftSideBar from "@/components/Admin/LeftSideBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AdminPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex">
        <LeftSideBar />
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
  );
}
