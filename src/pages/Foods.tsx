import { useQuery } from "react-query"
import { FoodType } from "../types";
import { useParams } from "react-router-dom";
import Loading from "../components/modules/Loading";
import ErrorAlert from "../components/modules/ErrorAlert";
import Pagination from "../components/modules/Pagination";
import PaginationCard from "../components/modules/Cards/PaginationCard";


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
        <div className="container overflow-x-hidden py-10">
            {isFetching ? <Loading /> : null}
            <div className="flex flex-wrap justify-between gap-y-5 mb-5">
                {data?.recipes?.map(food => (
                    <PaginationCard food={food} key={food.id} />
                ))}
            </div>
            <Pagination currentPage={+id} first={data?.skip || 1} last={(data?.total || 8) % 8 === 0 ? (data?.total || 8) / 8 : Math.floor((data?.total || 8) / 8 + 1)} />
        </div>
    )
}