import { thousandSeparator } from '@/utils'
import { ShopButton } from '@/components/Button'


export type ProductCardProp = {
    id: number,
    image: string,
    title: string,
    description: string,
    price: number,
}
export default function ProductCard( { product }: { product : ProductCardProp}) {
    return (
        <div className="bg-gray-800 shadow rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={product.image} alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-2 font-bold text-blue-600">{thousandSeparator(product.price)}</div>
                <ShopButton text='add to cart'/>
            </div>
        </div>
    )
}