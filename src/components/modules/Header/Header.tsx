import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/rest3-remove.png" width={64} />
                    <span className="ml-3 text-xl">BAHAMIN FOOD</span>
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