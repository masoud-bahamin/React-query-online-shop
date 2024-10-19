import Header from "../components/templates/Dashbord/Header";
import useFoods from "../Hooks/useFoods"
import FoodForm from "../components/templates/Dashbord/FoodForm";
import Loading from "../components/modules/Loading";
import ErrorAlert from "../components/modules/ErrorAlert";
import DeleteButton from "../components/templates/Dashbord/DeleteButton";


export default function () {

    const { data, isError, isLoading } = useFoods()

    

    if (isLoading) return <Loading />
    if (isError) return <ErrorAlert errorMsg={"error message please try again"} />
    return (
        <div className="border-t">
            <div className=" bg-gray-50">
                <Header />
                {/* Main content */}
                <div className="flex flex-wrap md:flex-nowrap">
                    <aside className="px-4 text-center border-r border-gray-200 flex md:block gap-4">
                        <button className="text-gray-500 block w-full text-center focus:outline-none focus:text-gray-700 my-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <button className="text-gray-500 block w-full text-center focus:outline-none focus:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto"
                                width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor"
                                    d="m31.707 19.293l-3-3a1 1 0 0 0-1.414 0L18 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414zM21.586 28H20v-1.586l5-5L26.586 23l-5 5zM28 21.586L26.414 20L28 18.414L29.586 20L28 21.586zM16 22c-3.364 0-6-2.636-6-6s2.636-6 6-6s6 2.636 6 6s-2.636 6-6 6zm0-10c-2.28 0-4 1.72-4 4s1.72 4 4 4s4-1.72 4-4s-1.72-4-4-4z" /><path fill="currentColor" d="m27.547 12l1.733-1l-2.336-4.044a2 2 0 0 0-2.373-.894l-2.434.823a11.056 11.056 0 0 0-1.312-.758l-.503-2.52A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.962 1.608l-.503 2.518c-.46.225-.906.47-1.327.754l-2.42-.818a2 2 0 0 0-2.373.894l-2.36 4.088a2 2 0 0 0 .412 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16c0 .258.01.513.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.894l2.434-.823c.418.282.856.535 1.312.758l.503 2.519A2 2 0 0 0 13.64 30H16v-2h-2.36l-.71-3.55a9.096 9.096 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.929 8.929 0 0 1-.007-3.128l-2.719-2.39l2.361-4.087l3.427 1.16A9.027 9.027 0 0 1 12.93 7.55L13.64 4h4.721l.71 3.55a9.1 9.1 0 0 1 2.695 1.572l3.447-1.166L27.547 12Z" /></svg>
                        </button>
                    </aside>
                    <main className="p-4">
                        <h1 className="text-2xl font-bold mb-4">Add Food </h1>
                        <div className="flex flex-wrap md:flex-nowrap gap-y-5">
                            {/* form */}
                            <div className="min-w-80">
                                <FoodForm />
                            </div>
                            {/* table */}
                            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                                <table className="w-full table-fixed">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                                Image
                                            </th>
                                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                                Name
                                            </th>
                                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                                Cuisine
                                            </th>
                                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {data?.recipes?.slice()?.reverse()?.map(food => (
                                            <tr key={food.id}>
                                                <td className="px-6 border-b border-gray-200">
                                                    <img className="size-10 rounded-full" src={food.image} alt="" />
                                                </td>
                                                <td className="py-4 px-6 border-b border-gray-200">{food.name}</td>
                                                <td className="py-4 px-6 border-b border-gray-200 truncate">{food.cuisine}</td>
                                                <td className="py-4 px-6 border-b border-gray-200">   
                                                        <button disabled className="bg-green-500 text-white py-1 px-3 mr-4 rounded-full text-xs">
                                                            Edit
                                                        </button>
                                                        <DeleteButton id={food.id} />
                                                </td>
                                            </tr>))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
