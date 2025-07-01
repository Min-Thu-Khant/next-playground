import DropDown from "@/components/Dropdown"
import ProductCard, { ProductCardProp } from "@/components/ProductCard"

export default function Shop() {
    const categories =  [ 'All Categories', 'Electronics', 'Fashion', 'Home' ]
    const sort_by = ['Sort by: Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']
    const products : Array<ProductCardProp>  = [
        { id: 1, image: 'https://placehold.co/300x200', description : "Short product description goes here.", title: "Product 10", price : 10000},
        { id: 2, image: 'https://placehold.co/300x200', description : "Short product description 2 goes here.", title: "Product 3", price : 1230000},
    ]
    return <>
        <div className="px-6 py-4 flex gap-4 items-center shadow-sm">
            <DropDown items = {categories}/>
            <DropDown items = {sort_by}/>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products.map( p => <ProductCard  key = { p.id } product={p}/>)
            }
        </div>
    </>

}