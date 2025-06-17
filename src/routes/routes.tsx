import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx"
import Adopt from "../pages/Adopt.tsx";
import Dogs from "../pages/Dogs.tsx";
import Cats from "../pages/Cats.tsx";

const AppRoutes = () => (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/cats" element={<Cats />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes