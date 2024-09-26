import { useMutation, useQueryClient } from "react-query";
import { FoodType } from "../types";

export default function usePostFood() {
    const queryClient = useQueryClient()
    return useMutation((body: object) => {
        return fetch("https://dummyjson.com/recipes", {
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => {
          return  res.json()
        } )
    },{
        onSuccess : () => {
            queryClient.invalidateQueries(["foods"]);
        }
    })
}
export function useDeleteFood() {
    const queryClient = useQueryClient()
    return useMutation((id:number) => {
        return fetch(`https://dummyjson.com/recipes/${id}`, {
            method: "Delete",
        }).then(res => {
          return  res.json()
        } )
    },{
        onSuccess : (res , id) => {
            console.log(res);
            
            const foods = queryClient.getQueryData(["foods"]) as FoodType[]
            const newFoods = foods?.filter(f => f.id !== id)
            queryClient.setQueryData(["foods"] , newFoods);
        }
    })
}