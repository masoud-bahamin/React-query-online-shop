import {  useQuery, useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import Loading from "../components/modules/Loading"
import ErrorAlert from "../components/modules/ErrorAlert"
import { FoodType } from "../types"

export default function SingleFood() {

    const { id } = useParams()
    if (!id) return <ErrorAlert errorMsg={"error message please try again"} />


    const queryClient = useQueryClient()

    const { data, isLoading, isError  } = useQuery((["single-food", id]), () => {
        return fetch(`http://localhost:4000/foods/${id}`).then(res => res.json())
    }, {
        initialData: () => {
            const foodsCach : undefined | FoodType[] = queryClient.getQueryData(["foods"]) 
            const food = foodsCach?.find(food => food.id === +id)
            return food  
        }
    })

    if (isLoading) return <Loading />
    if (isError) return <ErrorAlert errorMsg={"error message please try again"} />

    return (
        <div className="container">
            <div className="bg-white flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-gray-800">
                             {data?.name}
                            <span className="text-5xl sm:text-7xl">Time</span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-700 ">
                            {data.instructions}
                        </p>
                        <div className="flex mt-8">
                            <a
                                href="#"
                                className="uppercase py-2 px-4 rounded-lg bg-teal-500 border-2 border-transparent text-white text-md mr-4 hover:bg-teal-400"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-teal-500 text-teal-500  hover:bg-teal-500 hover:text-white text-md"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img
                            src={data.image}
                            className="max-w-xs md:max-w-sm m-auto"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}