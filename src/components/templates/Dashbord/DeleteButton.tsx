import { useDeleteFood } from "../../../Hooks/usePostFood"


function DeleteButton({id} : {id : number}) {

    const {mutate , isLoading:isDeleteLoading} = useDeleteFood()
    return (
        <button disabled={isDeleteLoading}
            onClick={() => mutate(id)}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-full text-xs">
            {isDeleteLoading ? "Deleteing" : "Delete"}
        </button>
    )
}

export default DeleteButton