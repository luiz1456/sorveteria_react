import { Routes, Route } from "react-router-dom"
import Layout from "../Components/Layout/index"
import Home from "../pages/Home/"
import Sabores from "../pages/Sabores/"
import Sobre from "../pages/About/"

export default function Rotas() {
    return (
        <Routes>
            <Route path="/sorveteria_react" element={<Layout />}>
                <Route path="/sorveteria_react/" element={<Home />} />
                <Route path="/sorveteria_react/sabores/" element={<Sabores />} />
                <Route path="/sorveteria_react/sobre/" element={<Sobre />} />
            </Route>
        </Routes>
    )
}
