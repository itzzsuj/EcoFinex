import header1 from '../assets/header1.webp';

function Header() {
    return (
        <header className="bg-gradient-to-r from-white to-green-100 shadow-md">
            <div className="container mx-auto flex items-center justify-between h-screen">
                {/* Text Section */}
                <div className="text-left max-w-2xl">
                    {/* Title */}
                    <h1 className="text-7xl font-extrabold text-green-700 leading-tight">
                        EcoFinex
                    </h1>

                    {/* Slogan */}
                    <p className="text-4xl text-gray-800 mt-6 font-medium">
                        Bridging Green Ambitions with Sustainable Investments
                    </p>

                    {/* Call to Action */}
                    <div className="mt-10">
                        <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            Get Started
                        </button>
                        <button className="ml-4 bg-white hover:bg-gray-100 text-green-600 border border-green-600 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Decorative Image */}
                <div className="flex-1">
                    <img
                        src={header1}
                        alt="Green Finance and Sustainability"
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
