import React from 'react';
import { Skeleton } from "@/app/components/ui/skeleton";

const BasicImageSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-40 w-full rounded-xl" />
    </div>
  )
}

export default BasicImageSkeleton


