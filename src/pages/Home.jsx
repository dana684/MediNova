import { useState, useEffect } from "react"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Appointment from "../components/Appointment";
import Packages from "../components/Packages";
import Doctors from "../components/Doctors";
import Find from "../components/Find";
import Testimonials1 from "../components/Testimonials";
import Blog from "../components/Blog";


const Home = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Hero />
            <About />
            <Services />
            <Appointment />
            <Packages />
            <Doctors />
            <Find />
            <Testimonials1 />
            <Blog />
            <ScrollToTopButton isActive={isActive} />
        </div>
    );
};
export default Home