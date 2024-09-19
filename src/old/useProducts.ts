import { useQuery } from "react-query"


interface ProductType {
    id: number,
    title: string,
    thumbnail: string
}

export interface DataType {
    products: ProductType[]
}

export default function useProducts() {
    return useQuery("Products", () => {
        return fetch("https://dummyjson.com/products").then(res => res.json()) as Promise<DataType>
    },{
        keepPreviousData:true
        // cacheTime: 200000,
        // staleTime: 10000,
        // select : (data) => {
        //     const products = data.products.slice(0,3)
        //     return {
        //         products 
        //     }
        // }
    })
}