"use client";
import {v4 as uuidv4} from "uuid";
import EditAddressDialog from "./EditAddressDialog";
import DeleteAddressDialog from "./DeleteAddressDialog";

const AddressBlock = ({addressInfo}:any) => {
    const addressItems = [
        {
            id: uuidv4(),
            title:'Add',
            subtitle: addressInfo.street
        },
        {
            id: uuidv4(),
            title:'City',
            subtitle: addressInfo.city
        },
        {
            id: uuidv4(),
            title:'State',
            subtitle: addressInfo.state
        },
        {
            id: uuidv4(),
            title:'Country',
            subtitle: addressInfo.country
        },
        {
            id: uuidv4(),
            title:'Phone',
            subtitle: addressInfo.phone
        },
    ] 
  return (
    <>
      <div className="w-full p-5 rounded-md shadow-md mb-6">
        <div>
            <div className="flex flex-col gap-1.5">
               <div className="flex items-start justify-between">
               <div className="flex items-center gap-2.5 pb-2">
               <h2 className="text-lg font-semibold text-dark">{`${addressInfo.firstName} ${addressInfo.lastName}`}</h2>
               {addressInfo.isDefault ? <span className="text-xs font-medium bg-primary/20 text-primary py-1 px-2 rounded-md" >Default</span> : null}
               </div>
               <div className="flex items-center gap-7">
                  <EditAddressDialog addressInfo={addressInfo} />
                  <DeleteAddressDialog addressInfo={addressInfo} />
               </div>
               </div>
                {
                    addressItems.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center gap-1">
                            <span className="text-sm font-semibold">{`${item.title}: `}</span>
                            <p className="text-sm font-medium">{`${item.subtitle}`}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default AddressBlock
