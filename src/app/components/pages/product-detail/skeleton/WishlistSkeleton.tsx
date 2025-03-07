import React from 'react';
import { Skeleton } from "@/app/components/ui/skeleton";

const WishlistSkeleton = () => {
  return (
    <div className="flex w-full gap-6 mt-8">
      <Skeleton className="h-[280px] lg:-w-4/12 w-full rounded-xl" />
      <Skeleton className="h-[280px] lg:-w-4/12 w-full rounded-xl" />
      <Skeleton className="h-[280px] lg:-w-4/12 w-full rounded-xl" />
    </div>
  )
}

export default WishlistSkeleton


