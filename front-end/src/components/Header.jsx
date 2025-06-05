import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl font-bold">MonLogo</div>

            {/* Barre de recherche */}
            <div className="flex-1 mx-6 max-w-md relative">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full pl-10 pr-4 py-2 rounded-full text-black focus:outline-none"
                />
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Liens */}
            <div className="flex space-x-6 text-sm font-medium">
                <Link to="/" className="hover:text-blue-300">
                    Accueil
                </Link>
                <Link to="/apropos" className="hover:text-blue-300">
                    À propos
                </Link>
                <Link to="/connexion" className="hover:text-blue-300">
                    Connexion
                </Link>
                <Link to="/panier" className="hover:text-blue-300">
                    Panier
                </Link>
            </div>
        </nav>
    );
}
