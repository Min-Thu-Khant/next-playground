'use client'
import { MouseEventHandler } from "react"

type ShopButtonProp =  React.InputHTMLAttributes<HTMLInputElement> & {
    text : string,
    onClick? : MouseEventHandler<HTMLButtonElement>
}

export default function ShopButton ( { text, onClick } : ShopButtonProp) {
    return <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" onClick={onClick}>
                    {text }
                </button>
}
