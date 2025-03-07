import React from 'react';
import { Skeleton } from "@/app/components/ui/skeleton";

const BasicThumbSkeleton = () => {
  return (
    <div className="flex gap-3 mt-8">
      <Skeleton className="h-16 w-full rounded-xl" />
      <Skeleton className="h-16 w-full rounded-xl" />
      <Skeleton className="h-16 w-full rounded-xl" />
      <Skeleton className="h-16 w-full rounded-xl" />
      <Skeleton className="h-16 w-full rounded-xl" />
    </div>
  )
}

export default BasicThumbSkeleton


