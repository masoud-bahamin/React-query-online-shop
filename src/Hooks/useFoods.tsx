import { useQuery } from "react-query";
import { FoodType } from "../types";

export default function useFoods(){
    return useQuery({
        queryKey:"foods",
        queryFn : () => {
           return fetch("https://dummyjson.com/recipes").then(res => res.json()) as Promise<{recipes :FoodType[]}>
        }
    })
}