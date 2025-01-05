import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsSidebarOpen(false); // Close the sidebar on navigation
    };

    return (
        <div className="bg-white shadow-lg border-b border-gray-300">
            <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
                {/* Logo/Title */}
                <div className="text-3xl font-bold text-green-600">
                    <h1>EcoFinex</h1>
                </div>

                {/* Hamburger Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="text-green-600 hover:text-green-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isSidebarOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links for Large Screens */}
                <div className="hidden lg:flex lg:items-center lg:gap-6 text-lg font-medium">
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </p>
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </p>
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </p>
                    <div className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow">
                        <button
                            className="font-medium px-4 py-1"
                            onClick={() => navigate("/Login")}
                        >
                            Login/Signup
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar for Mobile View */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-300">
                    <h2 className="text-2xl font-bold text-green-600">EcoFinex</h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-green-600 hover:text-green-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col p-5 space-y-4 text-lg font-medium">
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                        Home
                    </p>
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </p>
                    <p
                        className="text-green-600 hover:text-green-800 cursor-pointer"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact
                    </p>
                    <button
                        className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-md shadow font-medium"
                        onClick={() => {
                            navigate("/Login");
                            setIsSidebarOpen(false);
                        }}
                    >
                        Login/Signup
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
