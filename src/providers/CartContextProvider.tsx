'use client'
import { Product } from "@/api/products/types"
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"



export type CartItem = {
    item: Product
    count: number
}

export type CartContextType = {
    items: Array<CartItem>
    setItems: Dispatch<SetStateAction<CartItem[]>>
}
export const CartContext = createContext<CartContextType | undefined>(undefined)

export type CartContextProviderProp = {
    children : ReactNode
}

export default function CartContextProvider({ children } : CartContextProviderProp){

    const [items, setItems] = useState<Array<CartItem> | []>([])

    return (
        <CartContext value={ { items, setItems}}>
            {children}
        </CartContext>
    )
}