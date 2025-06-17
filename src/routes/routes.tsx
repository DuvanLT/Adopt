import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx"
import Adopt from "../pages/Adopt.js";
import Dogs from "../pages/Dogs.tsx";
import Cats from "../pages/Cats.tsx";

const AppRoutes = () => (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/adopt" element={<Adopt />} />
    <Route path="/dogs" element={<Dogs/>} />
    <Route path="/cats" element={<Cats/>} />
    </Routes>
)

export default AppRoutes