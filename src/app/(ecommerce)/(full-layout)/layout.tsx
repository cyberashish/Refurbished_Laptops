import Footer from "./layouts/footer/Footer"
import Header from "./layouts/header/Header"



const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <>
       <Header/>
       <div className='lg:mt-[113px] mt-[50px]' >
       {children}
       </div>
       <Footer/>
      </>
  )
}

export default layout
