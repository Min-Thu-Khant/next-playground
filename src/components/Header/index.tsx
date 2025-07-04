'use client'
import { CartContext } from "@/providers/CartContextProvider"
import { TodoListStore } from "@/store/todoStore"
import { useContext } from "react"
import Link from "next/link"
export default function Header () {
    const { items } = useContext(CartContext)!
    const { list, deleteAll } = TodoListStore()

    const getCartCount = () => {
        return items.reduce((acc, item )=> {
            acc += item.count
            return acc
        }, 0 )
    }
    return <header className="shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopMate</h1>
            <a href="/todo-context"> context by a</a>
            <Link href={'/todo'}>todo</Link>
            <Link href={'/todo-context'}>todo context</Link>
            <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg px-3 py-1 w-1/3"
            />
            <button onClick={deleteAll}>Delete All Tasks</button>
            <div className="bg-green-600 p-1 rounded-sm">Todo List ({list.length})</div>
            <div className="bg-green-600 p-1 rounded-sm">Chart ({getCartCount()})</div>
        </header>
}