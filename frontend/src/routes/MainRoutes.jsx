import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Signup from "../components/signup/Signup"
import AboutPage from "../pages/AboutPage"
import ProductPage from "../pages/ProductPage"
import PricingPage from "../pages/PricingPage"
import SupportPage from "../pages/SupportPage"
import NotFoundPage from "../pages/NotFoundPage"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default MainRoutes
