import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Inscription() {
    const navigate = useNavigate();
    // pour rediriger l'utilisateur
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            // pour associer son id avec la valeur ecrit
            [e.target.id]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch("/api/auth/inscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            // reponse du backend
            const data = await res.json();
            // si ca ne passe pas bien (Message d'erreur)
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            // si ca se passe bien l'utilisateur est rediriger vers la page connexion (connexion)
            setLoading(false);
            setError(null);
            navigate("/connexion");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">
                Inscription
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    className="border p-3 rounded-lg"
                    placeholder="Nom"
                    // on doit faire attention nomination sur le back doit etre la meme ici
                    id="username"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    className="border p-3 rounded-lg"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    className="border p-3 rounded-lg"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                />
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    Inscrivez-vous
                </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Avez vous déja un compte ?</p>
                <Link to={"/connexion"}>
                    <span className="text-blue-700">Connectez-vous</span>
                </Link>
            </div>
        </div>
    );
}
