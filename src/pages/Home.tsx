
// import { Link } from "react-router-dom";
// import Loading from "../components/modules/Loading";
// import ErrorAlert from "../components/modules/ErrorAlert";
// import useFoods from "../Hooks/useCategoryFoods";


export default function Home() {

    // const categoris = ["Italian", "Asian", "American", ""]

    // const data = useFoods(...categoris)

    // const allData = data.map((category, index) => {
    //     return { ...category, title: categoris[index] }
    // })

    // data.map(category => {
    //     if (category.isLoading) return <Loading />
    // })
    // data.map(category => {
    //     if (category.isError) return <ErrorAlert errorMsg={"error message please try again"} />
    // })


    return (
        <div className="container py-8">
            {/* {allData.map((category, index) => {
                const title = category.title || "Other";
                return (
                    <div key={index}>
                        {category.isLoading ? <Loading /> : null}
                        {category.isError ? <ErrorAlert errorMsg={"error message please try again"} /> : null}
                        <h2 className="text-2xl font-semibold mb-4">{title} Foods</h2>
                        <div className="flex flex-wrap gap-x-10 gap-y-10 mb-20">
                            {category.data?.map(food => (
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
            })} */}

                comming soon
        </div >
    )
}