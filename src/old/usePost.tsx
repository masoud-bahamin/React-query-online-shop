import { useMutation, useQueryClient } from "react-query";

export default function usePost(url: string) {
    const queryClient = useQueryClient()
    return useMutation(( body: object) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    }, {
        onSuccess(data, variables, context) {
            console.log(data, variables, context);
            queryClient.invalidateQueries(["Posts"])
        },
    })
}