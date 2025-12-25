import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import AboutP from "./pages/AboutP"
import ServicesP from "./pages/ServicesP"
import PackagesP from "./pages/PackagesP"
import DoctorP from "./pages/DoctorP"
import TestimonialsP from "./pages/TestimonialsP"
import AppointmentP from "./pages/AppointmentP"
import FindP from "./pages/FindP"
import ContactP from "./pages/ContactP"
import NotFound from "./pages/Notfound"
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutP />} />
            <Route path="/services" element={<ServicesP />} />
            <Route path="/packages" element={<PackagesP />} />
            <Route path="/doctor" element={<DoctorP />} />
            <Route path="/testimonials" element={<TestimonialsP />} />
            <Route path="/appointment" element={<AppointmentP />} />
            <Route path="/find" element={<FindP />} />
            <Route path="/contact" element={<ContactP />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to={"/404"} />} />
        </Routes>
    )
}
export default App