import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { FoodType } from "../../../types";
import Loading from "../../modules/Loading";
import MainCard from "../../modules/Cards/MainCard";

export default function InfinitivFoods() {

    const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
        ["infiniti-foods"],
        ({ pageParam = 1 }) => {
            return fetch(`https://dummyjson.com/recipes?limit=8&skip=${pageParam}`).then(res => res.json())
        },
        {
            getNextPageParam: (data) => {
                if (data.limit < 8) return undefined
                return data.skip + data.limit
            },
        })

    return (
        <div className="container py-8 mb-8">
            <h3 className="text-3xl text-center font-bold mb-4">All Foods</h3>
            {data?.pages.map((page, index) => {
                return (
                    <div key={index}>
                        {page.isLoading ? <Loading /> : null}
                        <div className="flex flex-wrap gap-y-5 mb-20">
                            {page.recipes?.map((food: FoodType) => (
                                <MainCard key={food.id} food={food} />
                            ))}
                        </div>
                    </div>
                )
            })}

            <button
                disabled={!hasNextPage}
                className={`bg-light font-medium rounded-lg py-3 px-12 mx-auto ${!hasNextPage ? "hidden" : "block"} `} onClick={() => fetchNextPage()}>
                {isFetching ? "Loading..." : "Load More"}
            </button>
        </div >
    )
}