import { Link } from "react-router-dom"
import { FoodType } from "../../../types"

function PaginationCard({ food }: { food: FoodType }) {
    return (
        <div key={food.id}
            className="w-full md:w-1/2 lg:w-1/4 px-5 mb-1 space-y-2 text-dark"
        >
            <Link to={`/food/${food.id}`}><img className="w-full max-h-64" src={food.image} alt="" /></Link>
            <Link className="font-medium" to={`/food/${food.id}`}>{food.name}</Link>
            <p className="text-sm text-gray-600 line-clamp-1">{food.instructions}</p>
        </div>
    )
}

export default PaginationCard