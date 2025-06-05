import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Logo */}
                <Link to="/">
                    <h1 className="font-bold text-3xl sm:text-xl flex flex-wrap uppercase">
                        <span className="text-slate-500">Ghanem-</span>
                        <span className="text-slate-700">fournitures-</span>
                        <span className="text-slate-900">scolaire</span>
                    </h1>
                </Link>
                {/* Barre de recherche */}
                <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                    <input
                        type="text"
                        placeholder="Recherche ...."
                        className="bg-transparent focus:outline-none w-24 sm:w-64"
                    />
                    <IoIosSearch />
                </form>
                {/* Liens */}
                <ul className="flex gap-4">
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        <Link to="/apropos">À propos</Link>
                    </li>
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        <Link to="/connexion">Connexion</Link>
                    </li>
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        <Link to="/deconnexion">Deconnexion</Link>
                    </li>
                    <li className="hidden sm:inline text-slate-700 hover:underline">
                        <Link to="/panier">Panier</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
