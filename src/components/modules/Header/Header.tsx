import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10  p-2 bg-teal-100 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">Bahamin</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900">HOME</Link>
                    <Link to="/foods" className="mr-5 hover:text-gray-900">FOODS</Link>
                    <Link to="/" className="mr-5 hover:text-gray-900">ABOUT</Link>
                    <Link to="/" className="hidden sm:inline-flex mr-5 hover:text-gray-900">CONTACT</Link>
                    <Link to="/dashboard" className="mr-5 hover:text-gray-900">DASHBOARD</Link>
                </nav>
                <button className="hidden sm:inline-flex items-center bg-teal-100 border-0 py-1 px-6 font-semibold focus:outline-none hover:bg-teal-200 rounded text-base mt-4 md:mt-0">
                    LOGIN
                </button>
            </div>
        </header>

    )
}