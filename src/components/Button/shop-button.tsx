
type ShopButtonProp = {
    text : string
}

export default function ShopButton ( { text } : ShopButtonProp) {
    return <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                    {text}
                </button>
}
