import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { FoodType } from "../../../types";
import Loading from "../../modules/Loading";

export default function InfinitivFoods() {

    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
        ["infiniti-foods"],
        ({ pageParam = 1 }) => {
            return fetch(`https://dummyjson.com/recipes?limit=8&skip=${pageParam}`).then(res => res.json())
        },
        {
            getNextPageParam: (data) => {
                if(data.limit < 8) return undefined
                return data.skip + data.limit
            },
        })

    return (
        <div className="container py-8">
            <h3 className="text-2xl font-semibold mb-4">Other Foods</h3>
            {data?.pages.map((page, index) => {
                return (
                    <div key={index}>
                        {page.isLoading ? <Loading /> : null}
                        <div className="flex flex-wrap gap-x-10 gap-y-10 mb-20">
                            {page.recipes?.map((food: FoodType) => (
                                <div key={food.id}
                                    className="w-1/5 space-y-2"
                                >
                                    <img className="w-full" src={food.image} alt="" />
                                    <Link to={`/food/${food.id}`}>{food.name}</Link>
                                    <p className="text-sm text-gray-400 line-clamp-3">{food.instructions}</p>
                                    <button className="text-sm w-full py-2 rounded-lg bg-green-800 text-gray-100 hover:bg-green-700">Add To Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}

            <button
                disabled={!hasNextPage}
                className={`bg-blue-400 text-white rounded-lg py-3 px-12 mx-auto ${!hasNextPage ? "hidden" : "block"} `} onClick={() => fetchNextPage()}>Load More</button>
        </div >
    )
}