
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/app/components/ui/sheet"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import FilterCriteria from "./FilterCriteria";
import { Icon } from "@iconify/react/dist/iconify.js";

const FilterDrawer = ({filteredProducts,
    setFilterProducts}:any) => {

  return (
<Sheet>
  <SheetTrigger asChild  >
      <button className="size-8 flex items-center justify-center hover:bg-primary/10 hover:text-primary rounded-full" >
        <Icon icon="mage:filter" width={24} height={24} className="shrink-0" />
      </button>
  </SheetTrigger>
  <SheetContent autoFocus={false} side="left" >
    <SheetHeader>
      <SheetTitle className="hidden" >Filter Items</SheetTitle>
      <SimpleBar className="h-[calc(100vh_-_120px)]" >
        <FilterCriteria filteredProducts={filteredProducts} setFilterProducts={setFilterProducts} />
        {/* <h1>Jai Shree Ram</h1> */}
     </SimpleBar>
     <SheetClose asChild >
     <Link href="/products/cart" className="block w-full" >
     <Button className="bg-transparent w-full p-2 hover:bg-primary hover:text-white h-fit border-primary rounded-md text-primary text-base font-semibold border" >View Cart Items</Button></Link>
     </SheetClose>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default FilterDrawer
