import { ThemeProvider } from '../contexts/ThemeContext';
import Footer from "./Footer"
import Header from "./Header"
import Nav from "../components/Nav"
const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <Nav />
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
export default Layout