import { useQueries} from "react-query"
import { FoodType } from "../types"

const fetchCategory = (url : string) => {
    return fetch(`https://dummyjson.com/recipes/tag/${url}`).then(res => res.json()) as Promise<{recipes: FoodType[]}>
}

export default function useCategoryFood(...arg : string[]) {
    const categories = [...arg]
    const newArray = categories.map(i => {return {queryKey:i ,  queryFn:() => fetchCategory(i) , cacheTime:500000 , staleTime:6000}})
    return useQueries(newArray)
}