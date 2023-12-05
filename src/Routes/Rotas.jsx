import { Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout/index"
import Home from "../pages/Home/"
import Sabores from "../pages/Sabores/"
import Sobre from "../pages/About/"

export default function Rotas() {
    return (
        <Routes>
            <Route path="/sorveteria_react" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="sabores" element={<Sabores />} />
                <Route path="sobre" element={<Sobre />} />
            </Route>
        </Routes>
    )
}
