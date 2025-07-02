import { Product } from "./types"

const BASE_URL = 'https://dummyjson.com/'

export const getAllProducts = async () : Promise<Array<Product>> => {
    try {
        const result = await fetch(BASE_URL + 'products')
        return (await result.json()).products
    } catch (error) {
        return []
    }
}

export const getProductById = async (id: string) : Promise<Product | undefined> => {
    try {
        const result = await fetch(BASE_URL + 'products/' + id)
        return await result.json()
    } catch (error) {
        return undefined
    }
}
