export default function Header () {
    return <header className="shadow-md p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ShopMate</h1>
            <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 rounded-lg px-3 py-1 w-1/3"
            />
        </header>
}