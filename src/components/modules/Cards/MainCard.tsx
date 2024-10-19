import { Link } from "react-router-dom"
import { FoodType } from "../../../types"


function MainCard({ food }: { food: FoodType }) {
    return (
        <div key={food.id}
            className="w-full md:w-1/2 lg:w-1/4 px-5 mb-1 space-y-2 text-dark"
        >
            <Link to={`/food/${food.id}`}><img className="w-full max-h-64" src={food.image} alt="" /></Link>
            <Link className="font-medium" to={`/food/${food.id}`}>{food.name}</Link>
            <p className="text-sm text-gray-600 line-clamp-3">{food.instructions}</p>
            <button className="text-sm py-2 rounded-lg text-primary font-medium hover:text-green-400">Show More</button>
        </div>
    )
}

export default MainCard