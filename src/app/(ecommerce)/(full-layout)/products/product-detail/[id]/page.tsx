
import ProductDetailContainer from "@/app/components/pages/product-detail/ProductDetailContainer"


const page = ({params}:{params:any}) => {
  const {id} = params;
  return (
     <ProductDetailContainer productId={id} />
  )
}

export default page
