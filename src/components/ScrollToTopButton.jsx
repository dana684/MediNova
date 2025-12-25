import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ isActive }) => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-6 right-6 ${isActive ? "translate-x-0 opacity-100" : "translate-x-[100px] opacity-0"
                } w-12 h-12 rounded-full bg-gradient-to-r from-[#13c5dd] to-[#1d2a4dcc] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 active:scale-95 dark:from-[#13c5dd] dark:to-[#2d3748]`}
            aria-label="Scroll to top"
        >
            <FaArrowUp className="text-lg" />
        </button>
    )
}

export default ScrollToTopButton;