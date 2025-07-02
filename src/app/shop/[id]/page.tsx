import { getProductById } from "@/api/products"
import ProductCard from "@/components/ProductCard"

export default async function ShopDetail ( { params } : { params : Promise<{id: string}>}){
    const { id } = await params

    const product = await getProductById(id)

    return product && <ProductCard product={product}/>
}