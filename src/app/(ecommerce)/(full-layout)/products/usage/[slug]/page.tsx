import UsageLaptops from "@/app/components/pages/usage-based-products/UsageLaptops";


const page = async ({params}:{params: Promise<{slug:string}>}) => {
    const slug = (await params).slug;
  return (
    <div>
      <UsageLaptops slug={slug} />
    </div>
  )
}

export default page
