import Footer from "./footer/Footer"
import Header from "./header/Header"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <>
       <Header/>
        {children}
       <Footer/>
      </>
  )
}

export default layout
