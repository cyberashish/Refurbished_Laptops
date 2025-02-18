import Link from "next/link";
interface menuProps {
  id: number,
  title: string,
  href: string
}

const ModestMenu = ({title,items}:{title:string,items:menuProps[]}) => {
 


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
          {title}
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
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 z-20 before:start-0 before:w-full"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-hover-event"
        >
          <div className="p-1 space-y-0.5">

            {
                items.map((item:menuProps) => {
                    return (
                        <Link key={item.id} href={item.href} className="flex items-center gap-x-3.5 py-1.5 px-3 rounded-lg text-sm font-medium text-muted hover:text-primary" >{item.title}</Link>
                    )
                })
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default ModestMenu;
