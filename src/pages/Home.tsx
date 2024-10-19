import { Link } from "react-router-dom";
import Loading from "../components/modules/Loading";
import ErrorAlert from "../components/modules/ErrorAlert";
import useFoods from "../Hooks/useCategoryFoods";
import InfinitivFoods from "../components/templates/Home/InfinitivFood";
import MainCard from "../components/modules/Cards/MainCard";


export default function Home() {

    const categoris = ["Italian", "Asian", "Pakistani"]

    const data = useFoods(...categoris)

    const allData = data.map((category, index) => {
        return { ...category, title: categoris[index] }
    })

    data.map(category => {
        if (category.isLoading) return <Loading />
    })
    data.map(category => {
        if (category.isError) return <ErrorAlert errorMsg={"error message please try again"} />
    })

    return (
        <div className="container py-8">
            <InfinitivFoods />
            <hr />
            {allData.map((category, index) => {
                const title = category.title || "Other";
                return (
                    <div key={index}>
                        {category.isLoading ? <Loading /> : null}
                        {category.isError ? <ErrorAlert errorMsg={"error message please try again"} /> : null}
                        <h2 className="text-2xl font-semibold mb-4">{title} Foods</h2>
                        <div className="flex flex-wrap gap-y-10 mb-20">
                            {category.data?.recipes.map(food => (
                                <MainCard key={food.id} food={food} />
                            ))}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}