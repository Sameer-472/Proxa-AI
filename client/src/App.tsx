import {ToastContainer} from 'react-toastify';
import  {Outlet} from 'react-router-dom';
import './App.css'
import FooterComponents from './components/FooterComponents';

function App() {
  return (
    <>
      <div>
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
        <FooterComponents />
      </div>
    </>
  )
}

export default App
