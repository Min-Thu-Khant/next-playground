'use client'
import DropDown from "@/components/Dropdown"
import ProductCard from "@/components/ProductCard"
import { useEffect, useState } from "react"
import { getAllProducts } from "@/api/products"
import { Product } from "@/api/products/types"

export default function Shop() {

    const [products, setProducts] = useState<Array<Product> | undefined>(undefined)

    useEffect(() => {
        getAllProducts().then(result => setProducts(result))
    }, [])

    const categories = ['All Categories', 'Electronics', 'Fashion', 'Home']
    const sort_by = ['Sort by: Featured', 'Price: Low to High', 'Price: High to Low', 'Newest']

    return <>
        <div className="px-6 py-4 flex gap-4 items-center shadow-sm">
            <DropDown items={categories} />
            <DropDown items={sort_by} />
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products && products.map(p => <ProductCard key={p.id} product={p} />)
            }
        </div>
    </>

}