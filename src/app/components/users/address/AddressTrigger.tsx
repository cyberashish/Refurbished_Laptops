import { Icon } from "@iconify/react/dist/iconify.js"


const AddressTrigger = () => {

  return (
    <div className={`w-full my-6 h-40 flex items-center justify-center group shadow-md rounded-lg cursor-pointer`} >
       <div className="flex flex-col items-center gap-1">
       <Icon icon="simple-line-icons:plus" className="text-5xl text-dark/70 group-hover:text-dark/90" />
       <p className="text-sm font-medium">Add new address</p>
       </div>
    </div>
  )
}

export default AddressTrigger
