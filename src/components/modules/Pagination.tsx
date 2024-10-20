import { Link } from "react-router-dom";

export default function Pagination({ currentPage, first, last }: { currentPage: number, first: number, last: number }) {
    
    return (
        <nav className="mb-4 flex justify-center space-x-4" aria-label="Pagination">
            <Link to={`/foods/${currentPage === first ? first : currentPage - 1}`} className={` ${currentPage === first ? "text-gray-400 cursor-auto" : "text-gray-700"} rounded-lg border border-primary px-2 py-2 `}>
                <span className="sr-only">Previous</span>
                <svg
                    className="mt-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
            <Link
                className={`${currentPage === first ? "hidden" : ""} rounded-lg border border-primary px-4 py-2 text-gray-700`}
                to={`/foods/${currentPage - 1}`}
            >
                {currentPage - 1}
            </Link>
            <span className="rounded-lg border border-primary bg-primary px-4 py-2 text-white">
                {currentPage}
            </span>
            <Link
                className={` ${currentPage === last ? "hidden" : ""} rounded-lg border border-primary px-4 py-2 text-gray-700`}
                to={`/foods/${currentPage + 1}`}
            >
                {currentPage + 1}
            </Link>
            <Link to={`/foods/${currentPage === last ? last : currentPage + 1}`}
                className={` ${currentPage === last ? "text-gray-400 cursor-auto" : "text-gray-700"} rounded-lg border border-primary px-2 py-2 `}
            >
                <span className="sr-only">Next</span>
                <svg
                    className="mt-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
        </nav>

    )
}