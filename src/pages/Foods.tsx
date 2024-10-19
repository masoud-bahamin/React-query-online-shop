import { useQuery } from "react-query"
import { FoodType } from "../types";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/modules/Loading";
import ErrorAlert from "../components/modules/ErrorAlert";
import Pagination from "../components/modules/Pagination";


export default function Foods() {

    const { id = 1 } = useParams()

    const { data, isError, isLoading, isFetching } = useQuery(["foods-pagination", id], () => {
        return fetch(`https://dummyjson.com/recipes?limit=8&skip=${+id * 8 - 8}`).then(res => res.json()) as Promise<{ recipes: FoodType[], limit: number, skip: number, total: number }>
    }, {
        cacheTime: 600000,
        staleTime: 100000
    })

    if (isLoading) return <Loading />
    if (isError) return <ErrorAlert errorMsg={"error message please try again"} />

    return (
        <div className="container overflow-x-hidden">
            {isFetching ? <Loading /> : null}
            <div className="flex flex-wrap justify-between gap-y-5">
                {data?.recipes?.map(food => (
                    <div key={food.id}
                        className="w-full md:w-1/2 lg:w-1/4 p-5 space-y-2"
                    >
                        <Link to={`/food/${food.id}`}><img className="w-full max-h-64" src={food.image} alt="" /></Link>
                        <Link to={`/food/${food.id}`}>{food.name}</Link>
                        <p className="text-sm text-gray-400 line-clamp-1">{food.instructions}</p>
                    </div>
                ))}
            </div>
            <Pagination currentPage={+id} first={data?.skip || 1} last={(data?.total || 8) % 8 === 0 ? (data?.total || 8) / 8 : Math.floor((data?.total || 8) / 8 + 1)} />
        </div>
    )
}