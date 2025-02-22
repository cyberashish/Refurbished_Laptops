export default function Faq() {
  return (
    <div className="container-sm py-8 px-6">
      <div className="flex flex-col gap-6">
        <div>
          <div className=" flex justify-center">
            <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
              FAQs
            </span>
          </div>
          <h3 className="text-[28px] font-semibold text-dark text-center">
            Frequently Asked Question
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <div className="hs-accordion-group lg:w-7/12 w-full">
            {/* First Question Starts */}
            <div
              className="hs-accordion hs-accordion-active:border-border shadow mb-4 bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-one"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 active"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-one"
              >
                Why Choose Refurbished Laptops?
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-one"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-one"
              >
                <div className="pb-4 px-5">
                  <div className="text-gray-800 dark:text-neutral-200">
                    <ol className="flex flex-col gap-2">
                      <li className="text-[15px] font-medium">
                        <strong>Affordability:</strong> Refurbished laptops are
                        often sold at a fraction of the cost of a new laptop.
                        This means that you can get a high-quality laptop that
                        fits your budget.
                      </li>
                      <li className="text-[15px] font-medium">
                        <strong>Environmentally friendly:</strong> When you buy
                        a refurbished laptop, you&apos;re helping to reduce
                        electronic waste. Electronic waste is a significant
                        problem worldwide, and by recycling electronic devices
                        like laptops, we can help reduce the amount of waste
                        that ends up in landfills.
                      </li>
                      <li className="text-[15px] font-medium">
                        <strong>Quality:</strong> Refurbished laptops are tested
                        and repaired by professionals to ensure that
                        they&apos;re in good condition. This means that you can
                        get a high-quality laptop that&apos;s just like new.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Question Starts */}
            <div
              className="hs-accordion hs-accordion-active:border-border shadow mb-4 active bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-two"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-expanded="true"
                aria-controls="hs-basic-active-bordered-collapse-two"
              >
                What are some benefits of buying a refurbished laptop from
                Lapfurbo?
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-two"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-two"
              >
                <div className="pb-4 px-5">
                  <p className="text-sm font-medium text-dark">
                    There are several benefits to buying a refurbished laptop
                    from Newjaisa. First and foremost, our refurbished laptops
                    are significantly more affordable than buying a brand new
                    laptop, making it a great option for customers on a tight
                    budget. Additionally, buying a refurbished laptop from
                    Newjaisa helps reduce electronic waste by extending the life
                    of an existing device, and it&apos;s a more environmentally
                    - friendly option than buying a new laptop.
                  </p>
                </div>
              </div>
            </div>
            {/* Third Question Starts */}
            <div
              className="hs-accordion hs-accordion-active:border-border shadow mb-4 bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-four"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-three"
              >
                How do I Return or Cancel an Order?
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-four"
              >
                <div className="pb-4 px-5">
                  <p className="text-dark text-sm font-medium">
                    At Newjaisa we provide a 1 year warranty to all customers
                    for our every product. and Customer Support for our users.
                    Any customer can contact 80884 03455 (Mon-Sat between 10AM
                    to 7PM) or drop the mail at -support@newjaisa.com
                  </p>
                </div>
              </div>
            </div>
            {/* Fourth Question Starts */}
            <div
              className="hs-accordion hs-accordion-active:border-border shadow mb-0 bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
              id="hs-active-bordered-heading-four"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
                aria-expanded="false"
                aria-controls="hs-basic-active-bordered-collapse-four"
              >
                How do I Return or Cancel an Order?
                <svg
                  className="hs-accordion-active:hidden block size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <div
                id="hs-basic-active-bordered-collapse-three"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                role="region"
                aria-labelledby="hs-active-bordered-heading-four"
              >
                <div className="pb-4 px-5">
                  <div className="text-dark text-sm font-medium">
                    <ul className="list-disc list-inside flex flex-col gap-2">
                      <li className="text-[15px] font-medium">
                        If, for any reason, You are not completely satisfied
                        with a purchase We invite You to review our policy on
                        refunds and returns. The following terms are applicable
                        for any products that You purchased with Us. You are
                        entitled to return your order within 14 days of
                        receiving it.To start a return, you can contact us at
                        support@newjaisa.com. If your return is accepted, we’ll
                        send you instructions on how and where to send your
                        package. Items sent back to us without first requesting
                        a return will not be accepted. For Return/Replacement
                        Queries you can reach out to us on :
                      </li>
                      <li className="text-[15px] font-medium">
                        Email ID :
                        <a href="mailto:support@newjaisa.com">
                          support@newjaisa.com
                        </a>
                      </li>
                      <li className="text-[15px] font-medium">
                        Contact no. : 808840 03455 (Mon-Sat between 10AM to 7PM)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
