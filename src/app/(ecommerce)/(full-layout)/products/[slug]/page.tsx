import ProductDetailContainer from "@/app/components/pages/product-detail/product-slider/ProductDetailContainer"


  export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;
    return <ProductDetailContainer productSlug={slug} />
  }