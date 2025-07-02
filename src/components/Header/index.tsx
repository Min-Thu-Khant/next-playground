'use client'
import { CartContext } from "@/providers/CartContextProvider"
import { useContext } from "react"

export default function Header () {
    const { items } = useContext(CartContext)!

    const getCartCount = () => {
        return items.reduce((acc, item )=> {
            acc += item.count
            return acc
        }, 0 )
    }
    return <header className="shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopMate</h1>
            <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg px-3 py-1 w-1/3"
            />
            <div className="bg-green-600 p-1 rounded-sm">Chart ({getCartCount()})</div>
        </header>
}