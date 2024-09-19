import { useQuery } from "react-query"
import { FoodType } from "../types";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/modules/Loading";
import ErrorAlert from "../components/modules/ErrorAlert";
import Pagination from "../components/modules/Pagination";


export default function Foods() {

    const {id = 1} = useParams()

    const { data, isError, isLoading, isFetching } = useQuery(["foods-pagination" , id], () => {
        return fetch(`http://localhost:4000/foods?_page=${id}&_per_page=5`).then(res => res.json()) as Promise<{data :FoodType[] , first : number , last : number}>
    }, {
        cacheTime: 600000,
        staleTime: 100000
    })
    console.log(data);
    
    if (isLoading) return <Loading />
    if (isError) return <ErrorAlert errorMsg={"error message please try again"} />

    return (
        <div className="container overflow-x-hidden">
            {isFetching ? <Loading /> : null}
            <div className="flex flex-wrap justify-between gap-y-10">
                {data?.data?.map(food => (
                    <div key={food.id}
                        className="w-1/5 p-5 space-y-2"
                    >
                        <img className="w-full" src={food.image} alt="" />
                        <Link to={`/food/${food.id}`}>{food.name}</Link>
                        <p className="text-sm text-gray-400 line-clamp-3">{food.instructions}</p>
                        <button className="text-sm w-full py-2 rounded-lg bg-green-800 text-gray-100 hover:bg-green-700">Add To Cart</button>
                    </div>
                ))}
            </div>
            <Pagination currentPage={+id} first={data?.first || 1} last={data?.last || 1}/>
        </div>
    )
}