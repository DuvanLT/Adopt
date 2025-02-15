import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx"
import Adopt from "../pages/Adopt.tsx";

const AppRoutes = () => (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adopt" element={<Adopt />} />
    </Routes>
)

export default AppRoutes