import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="text-dark">
            <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/rest4-remove.png" width={64} />
                    <span className="ml-3 text-xl">BAHAMIN FOOD</span>
                </a>
                <nav className="md:ml-auto font-medium md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-light">HOME</Link>
                    <Link to="/foods" className="mr-5 hover:text-light">FOODS</Link>
                    <Link to="/" className="mr-5 hover:text-light">ABOUT</Link>
                    <Link to="/" className="hidden sm:inline-flex mr-5 hover:text-light">CONTACT</Link>
                    <Link to="/dashboard" className="mr-5 hover:text-light">DASHBOARD</Link>
                </nav>
                <button className="hidden sm:inline-flex items-center bg-primary border-0 py-1 px-6 font-semibold focus:outline-none hover:text-gray-300 rounded text-base mt-4 md:mt-0">
                    LOGIN
                </button>
            </div>
        </header>

    )
}