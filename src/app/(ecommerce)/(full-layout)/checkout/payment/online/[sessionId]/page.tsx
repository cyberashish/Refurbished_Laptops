

import OnlinePaymentDetails from '@/app/components/pages/checkout/payment/online/OnlinePaymentDetails'


const page = async ({params}:{params:Promise<{sessionId:string}>}) => {
  const sessionId = (await params).sessionId;
  
  return (
    <div>
      <OnlinePaymentDetails sessionId={sessionId} />
    </div>
  )
}

export default page
