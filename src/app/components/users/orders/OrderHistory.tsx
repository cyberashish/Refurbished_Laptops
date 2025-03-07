
import AllOrders from './AllOrders'




const OrderHistory = () => {
  return (
    <>
    <h2 className="text-2xl font-semibold text-dark mb-6 mt-10">Order History</h2>
     <div className="flex w-full justify-between gap-6 lg:flex-nowrap flex-wrap">
      <div className="lg:w-9/12 w-full">
        <div className="flex flex-col gap-6">
         <AllOrders/>
        </div>
      </div>
      <div className="lg:w-3/12 w-full">
        {null}
      </div>
     </div>
     </>
  )
}

export default OrderHistory