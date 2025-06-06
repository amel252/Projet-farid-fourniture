import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signin = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        res.status(201).json("Inscription reussie");
    } catch (error) {
        res.status(500).json(error.message);
    }
};
