import { useMutation, useQueryClient } from "react-query";
import { FoodType } from "../types";

export default function usePostFood() {
    const queryClient = useQueryClient()
    return useMutation((body: object) => {
        return fetch("https://dummyjson.com/products/add", {
            method: "POST",
            body: JSON.stringify(body)
        }).then(res => {
          return  res.json()
        } )
    },{
        onSuccess : (first , body : any) => {
            
            // queryClient.invalidateQueries(["foods"]);
            const oldFoods : any  = queryClient.getQueryData(["foods"]) 
            body.id = first.id
            oldFoods.recipes.push(body)
            queryClient.setQueryData(["foods"],oldFoods)
        }
    })
}
export function useDeleteFood() {
    const queryClient = useQueryClient()
    return useMutation((id:number) => {
        return fetch(`https://dummyjson.com/products/${id}`, {
            method: "Delete",
        }).then(res => {
          return  res.json()
        } )
    },{
        onSuccess : (res , id) => {
            const foods : any = queryClient.getQueryData(["foods"])
            console.log(res);      
            const newFoods = foods?.recipes.filter((f : FoodType) => f.id !== id)
            foods.recipes = newFoods
            queryClient.setQueryData(["foods"] , foods);
        }
    })
}