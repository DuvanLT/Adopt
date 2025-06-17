import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx"
import Adopt from "../pages/Adopt.tsx";
import Dogs from "../pages/Dogs.tsx";
import Cats from "../pages/Cats.tsx";

const AppRoutes = () => (
    <Routes>
    <Route path="/" element={<Adopt />} />
    <Route path="/adopt" element={<Home />} />
    <Route path="/dogs" element={<Dogs/>} />
    <Route path="/cats" element={<Cats/>} />
    </Routes>
)

export default AppRoutes