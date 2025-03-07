
import OrderDetails from './OrderDetails';
import ShippingInfo from './ShippingInfo';

const ShippingDetails = () => {
  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap">
    <ShippingInfo/>
    <OrderDetails/>
  </div>
  )
}

export default ShippingDetails
