import { thousandSeparator } from '@/utils'
import { ShopButton } from '@/components/Button'
import { Product } from '@/api/products/types'
import Link from 'next/link'

export default function ProductCard( { product }: { product : Product}) {
    return (
        <Link href={'/shop/' + product.id}>
        <div className="bg-gray-800 shadow rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={product.thumbnail} alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-2 font-bold text-blue-600">{thousandSeparator(product.price)}</div>
                <ShopButton text='add to cart'/>
            </div>
        </div>
        </Link>
    )
}