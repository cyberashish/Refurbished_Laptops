import { ToastContainer } from "react-toastify"
import Footer from "./layouts/footer/Footer"
import Header from "./layouts/header/Header"



const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <>
       <Header/>
       <div className='lg:mt-[113px] mt-[50px]' >
       {children}
       </div>
       <ToastContainer position="top-right" autoClose={3000} />
       <Footer/>
      </>
  )
}

export default layout
