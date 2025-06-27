import DropDown from "@/components/Dropdown"

export default function Shop() {
    const categories =  [ 'All Categories', 'Electronics', 'Fashion', 'Home' ]
    const sort_by = ['Sort by: Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']
    return <>
        <div className="px-6 py-4 flex gap-4 items-center shadow-sm">
            <DropDown items = {categories}/>
            <DropDown items = {sort_by}/>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className= "bg-gray-800 shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://placehold.co/300x200" alt="Product" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Product Title</h2>
                    <p className="text-sm text-gray-600 mt-1">Short product description goes here.</p>
                    <div className="mt-2 font-bold text-blue-600">$29.99</div>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="bg-gray-800 shadow rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src="https://placehold.co/300x200" alt="Product" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Another Product</h2>
                    <p className="text-sm text-gray-600 mt-1">Another item description here.</p>
                    <div className="mt-2 font-bold text-blue-600">$45.00</div>
                    <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    </>

}