import { useQuery } from "react-query";
import { FoodType } from "../types";

export default function useFoods(){
    return useQuery({
        queryKey:"foods",
        queryFn : () => {
           return fetch("http://localhost:4000/foods").then(res => res.json()) as Promise<FoodType[]>
        }
    })
}