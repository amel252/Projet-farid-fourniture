import { BrowserRouter, Routes, Route } from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Connexion from "./pages/Connexion";
import Deconnexion from "./pages/Deconnexion";
import Panier from "./pages/Panier";

import Header from "./components/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/deconnexion" element={<Deconnexion />} />
                <Route path="/panier" element={<Panier />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
