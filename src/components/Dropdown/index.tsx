type DropDownProps = {
    items : Array<string>
}

export default function DropDown( { items } : DropDownProps) {
    return <select className="border px-3 py-2 rounded-md bg-gray-800">
                {
                    items.map(( item ) => <option key = {item}>{item}</option>)
                }
            </select>
}