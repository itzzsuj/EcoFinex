import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-between items-center p-5 bg-white shadow-lg border-b border-gray-300">
            {/* Logo/Title */}
            <div className="text-3xl font-bold text-green-600">
                <h1>EcoFinex</h1>
            </div>

            {/* Navigation Links */}
            <div className="text-lg font-medium flex gap-6 items-center">
                <p className="text-green-600 hover:text-green-800 cursor-pointer">Home</p>
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

                {/* Login/Signup Button */}
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
    );
}

export default Navbar;
