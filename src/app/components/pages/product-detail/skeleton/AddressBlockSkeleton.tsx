import { Skeleton } from '@/app/components/ui/skeleton'
import React from 'react'

const AddressBlockSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-52 w-full rounded-xl" />
    </div>
  )
}

export default AddressBlockSkeleton
