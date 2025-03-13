import VerifyEmailComplete from '@/app/components/users/verify-email/VerifyEmailComplete'
import { Suspense } from 'react'


const Page = async ({params}:{params:Promise<{token:string}>}) => {
  const token = (await params).token;
  return (
    <div>
      <VerifyEmailComplete token={token}/>
    </div>
  )
}

export default Page
