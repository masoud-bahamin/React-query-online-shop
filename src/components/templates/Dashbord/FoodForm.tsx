import { useState } from "react";
import usePostFood from "../../../Hooks/usePostFood";
import ErrorAlert from "../../modules/ErrorAlert";

export default function FoodForm() {
    const [name, setName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [image, setImage] = useState("")

    const { mutate, isError, isLoading, isSuccess } = usePostFood()

    const saveFood = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate({ name, cuisine, image })
    }

    if (isError) return <ErrorAlert errorMsg={"error message please try again"} />
    if (isSuccess) return <p className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700">Create successfull</p> 
    
    return (
        <form onSubmit={saveFood} className=" mx-auto p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name:
                </label>
                <input
                    value={name} onChange={e => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter food name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    Cuisine:
                </label>
                <input
                    value={cuisine} onChange={e => setCuisine(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter food cuisine"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                    Image:
                </label>
                <input
                    value={image} onChange={e => setImage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="image"
                    type="text"
                    placeholder="Enter image address"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">
                    Instructions:
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feedback"
                    rows={5}
                    placeholder="Enter your feedback"
                    defaultValue={""}
                />
            </div>
            <button disabled={isLoading}
                className="bg-primary hover:bg-light font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                {isLoading ? "Submiting" : "Submit"}
            </button>
        </form>
    )
}