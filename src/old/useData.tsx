import { useQueries } from "react-query";

export default function useData() {
    return useQueries([
        {
            queryKey: "Users",
            queryFn: () => {
                return fetch("https://dummyjson.com/users").then(res => res.json())
            }
        },
        {
            queryKey: "Posts",
            queryFn: () => {
                return fetch("http://localhost:4000/posts").then(res => res.json())
            }
        }
    ])
}