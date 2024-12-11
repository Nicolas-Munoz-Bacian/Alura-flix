import Cabecera from "../src/components/Cabecera/Cabecera"
import Container from "../src/components/Container";
import Pie from "../src/components/Pie"
import FavoritosProvider from "./pages/Context/Favoritos"
import Favoritos from "../src/pages/Favoritos";
import Inicio from "../src/pages/inicio"
import Player from "../src/pages/Player"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera/>
        <Container>

        <FavoritosProvider>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/favoritos" element={<Favoritos/>}></Route>
            <Route path="/:id" element={<Player/>}></Route>
        </Routes>

        </FavoritosProvider>
        </Container>
        <Pie/>
        </BrowserRouter>
    )
}

export default AppRoutes;