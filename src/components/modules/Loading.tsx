export default function Loading() {
    return (
        <div className="absolute left-0 top-0 flex justify-center items-center bg-[rgba(250,250,250,.6)] h-screen w-full z-50">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-700 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-teal-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-teal-700 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    )
}