import Navbar from "./Navbar";
import Header from './Header';
import AboutSection from "./About";
import OurServices from "./OurService";
import Footer from "./Footer";

function Landing() {
    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            <Navbar />
            <Header></Header>
            <AboutSection></AboutSection>
            <OurServices></OurServices>
            <div className="pt-5">
            <Footer></Footer>
            </div>
        </div>
    );
}

export default Landing;
