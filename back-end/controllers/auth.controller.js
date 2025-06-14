import User from "../models/user.model.js";
// import { inscription } from "../controllers/auth.controller.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
import jwt from "jsonwebtoken";

// une fonction pour récuperer les données ecrites , hasher le password
export const inscription = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        // ****** chat gpt : sauvegarde en base
        await newUser.save();
        // chatgpt
        res.status(201).json({ success: true, message: "Inscription réussie" });
    } catch (error) {
        // chatgpt
        next(errorHandler(500, "Erreur lors de l'inscription"));
    }
};
export const connexion = async (req, res, next) => {
    // les données de l'utilisateur lors de la connexion
    const { email, password } = req.body;
    try {
        // Recup des données de  l'utilisateur a partir de son email a partir de la BDD
        const validUser = await User.findOne({ email });
        // si l'utilisateur n'existe pas
        if (!validUser) {
            return next(errorHandler(401, "Utilisateur n'existe pas "));
        }
        // s'il existe je comparer les mdp existants depuis le form et le mdp hashé
        const validPassword = bcryptjs.compareSync(
            password,
            validUser.password
        );
        if (!validPassword)
            return next(errorHandler(404, "Faux mot de passe "));

        // creation de token pour la connexion
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        // envoi des données  lors de la connexion
        const { password: pass, ...rest } = validUser._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};
