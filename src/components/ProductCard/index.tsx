'use client'
import { thousandSeparator } from '@/utils'
import { ShopButton } from '@/components/Button'
import { Product } from '@/api/products/types'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from '@/providers/CartContextProvider'

export default function ProductCard( { product }: { product : Product}) {
    const router = useRouter()
    const { items : cartItems, setItems : setCartItems} = useContext(CartContext)!
    const addToCart = () => {
        //check if product is in items
        //if exist plus count
        //if not push product to items
        let isExist = false;
        const newCartItems = cartItems.map((cartItem) => {
            if(cartItem.item.id == product.id){
                isExist = true;
                return { item: product, count: cartItem.count + 1 }
            }
            return cartItem
        })

        if (!isExist){
            newCartItems.push({item: product, count: 0})
        }
        setCartItems(newCartItems)
    }
    return (
        <div className="bg-gray-800 shadow rounded-lg overflow-hidden hover:shadow-lg transition">
            <img src={product.thumbnail} alt="Product" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="mt-2 font-bold text-blue-600">{thousandSeparator(product.price)}</div>
                <div className='flex gap-3'>
                    <ShopButton onClick={ () => router.push('/shop/' + product.id)} text='View Detail' />
                    <ShopButton onClick={addToCart}text='add to cart'/>
                </div>
            </div>
        </div>
    )
}