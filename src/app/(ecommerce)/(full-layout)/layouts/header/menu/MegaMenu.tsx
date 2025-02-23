import Link from "next/link"



const MegaMenu = () => {

  const Laptops = [
    {
      id:1,
      title:"Lenevo Laptops",
      href:"/"
    },
    {
      id:2,
      title:"HP Laptops",
      href:"/"
    },
    {
      id:3,
      title:"Acer Chromebook",
      href:"/"
    },
    {
      id:4,
      title:"Dell Laptops",
      href:"/"
    },
    {
      id:5,
      title:"Microsoft Laptops",
      href:"/"
    },
  ]
  const Desktops = [
    {
      id:1,
      title:"Lenevo Desktops",
      href:"/"
    },
    {
      id:2,
      title:"HP Desktops",
      href:"/"
    },
    {
      id:3,
      title:"Acer Desktops",
      href:"/"
    },
    {
      id:4,
      title:"Dell Desktops",
      href:"/"
    },
    {
      id:5,
      title:"Microsoft Desktops",
      href:"/"
    },
  ]
  const Mini_PCs = [
    {
      id:1,
      title:"HP Mini PC",
      href:"/"
    },
    {
      id:2,
      title:"Acer Mini PC",
      href:"/"
    },
    {
      id:3,
      title:"Asus Mini PC",
      href:"/"
    },
    {
      id:4,
      title:"Dell Mini PC",
      href:"/"
    },
    {
      id:5,
      title:"Lenevo Mini PC",
      href:"/"
    },
  ]

  const Monitors = [
    {
      id:1,
      title: "Dell Monitors",
      href:"/"
    },
    {
      id:2,
      title: "HP Monitors",
      href:"/"
    },
    {
      id:3,
      title: "Lenevo Monitors",
      href:"/"
    },
    {
      id:4,
      title: "Lapcare Monitors",
      href:"/"
    },
  ]

  return (
    <>
    <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex">
  <button
    id="hs-dropdown-hover-event"
    type="button"
    className="hs-dropdown-toggle  inline-flex items-center gap-x-2 text-[15px] font-semibold text-dark hs-dropdown-open:text-primary rounded-lg py-0.5"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-label="Dropdown"
  >
    Products
    <svg
            className="hs-dropdown-open:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
  </button>
  <div
    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[800px] bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 z-20 before:w-full"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="hs-dropdown-hover-event"
  >
   <div className="flex justify-between">
     <div className="flex flex-col gap-2">
      <h3 className="font-semibold py-0.5 px-3.5 border-s-2 border-primary ms-3.5 mt-4 text-base text-dark">Laptop</h3>
      <div className="p-1 space-y-0.5">
   {
                Laptops.map((item) => {
                    return (
                        <Link key={item.id} href={item.href} className="flex items-center gap-x-3.5 py-1.5 px-3 rounded-lg text-sm font-medium text-muted hover:text-primary" >{item.title}</Link>
                    )
                })
            }
    </div>
     </div>
     <div className="flex flex-col gap-2">
      <h3 className="font-semibold py-0.5 px-3.5 border-s-2 border-primary ms-3.5 mt-4 text-base text-dark">Desktop</h3>
      <div className="p-1 space-y-0.5">
   {
                Desktops.map((item) => {
                    return (
                        <Link key={item.id} href={item.href} className="flex items-center gap-x-3.5 py-1.5 px-3 rounded-lg text-sm font-medium text-muted hover:text-primary" >{item.title}</Link>
                    )
                })
            }
    </div>
     </div>
     <div className="flex flex-col gap-2">
      <h3 className="font-semibold py-0.5 px-3.5 border-s-2 border-primary ms-3.5 mt-4 text-base text-dark">Mini PC</h3>
      <div className="p-1 space-y-0.5">
   {
                Mini_PCs.map((item) => {
                    return (
                        <Link key={item.id} href={item.href} className="flex items-center gap-x-3.5 py-1.5 px-3 rounded-lg text-sm font-medium text-muted hover:text-primary" >{item.title}</Link>
                    )
                })
            }
    </div>
     </div>
     <div className="flex flex-col gap-2">
      <h3 className="font-semibold py-0.5 px-3.5 border-s-2 border-primary ms-3.5 mt-4 text-base text-dark">Monitor</h3>
      <div className="p-1 space-y-0.5">
   {
                Monitors.map((item) => {
                    return (
                        <Link key={item.id} href={item.href} className="flex items-center gap-x-3.5 py-1.5 px-3 rounded-lg text-sm font-medium text-muted hover:text-primary" >{item.title}</Link>
                    )
                })
            }
    </div>
     </div>


   </div>
  </div>
</div>

    </>
  )
}

export default MegaMenu
