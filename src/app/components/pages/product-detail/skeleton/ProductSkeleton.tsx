import { Skeleton } from "../../../ui/skeleton";


export function ProductSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    </div>
  )
}

export function NewProductSkeleton(){
    const counts = [];
    for(let a = 0 ; a<=50 ; a++){
        counts.push(a);
    }
    return (
     <div className="flex flex-col gap-4">
      {
        counts.map((_item,index) => {
            return (
                <div key={index} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[400px]" />
                </div>
              </div>
            )
        })
      }
     </div>
    )
}
