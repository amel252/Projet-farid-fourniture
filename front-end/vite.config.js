import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// est une fonction Vite qui aide à fournir une configuration avec de l'autocomplétion
export default defineConfig({
    // plugins: [react()],

    server: {
        proxy: {
            // Si ton front (Vite) fait une requête vers /api/, Elle sera redirigée automatiquement au port 3000 au lieu de 5173
            "/api": {
                target: "http://localhost:3000",
                // peut accepter des connexions non sécurisées (HTTP simple).
                secure: false,
            },
        },
    },
});
