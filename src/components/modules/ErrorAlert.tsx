export default function ErrorAlert({errorMsg}:{errorMsg : string}) {
    return (
        <div className="flex justify-center items-center p-12">
            <div className="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700" role="alert">
                {errorMsg || "Error"}
            </div>
        </div>
    )
}