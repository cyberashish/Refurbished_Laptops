import VerifyEmailComplete from '@/app/components/users/verify-email/VerifyEmailComplete'
import { Suspense } from 'react'


const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailComplete/>
      </Suspense>
    </div>
  )
}

export default Page
