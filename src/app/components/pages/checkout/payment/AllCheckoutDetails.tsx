import FinalOrderDetails from "./offline/FInalOrderDetails"
import PaymentMode from "./offline/PaymentMode"



const AllCheckoutDetails = () => {
  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap">
     <PaymentMode/>
     <FinalOrderDetails/>
  </div>
  )
}

export default AllCheckoutDetails
