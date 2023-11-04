import express from 'express';
const router = express.Router();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import User from '../models/user.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
router.use(express.json());

const getHomepage =
    async (req, res) => {
        try {
            res.send('Frontend here');
        } catch (error) {
            console.log(error);
            res.status(500).send("Error occurred while fetching movies");
        }
    }

const postHomepage =
    async (req, res) => {
        try {
            const movieId = req.query.movie;
            const userId = req.params.id;
            const user = await User.findById(userId);
            user.moviesWatched.push(movieId);
            res.send(user);
            console.log(user);
        } catch (error) {
            console.log(error);
            res.status(500).send("Error occurred ");
        }
    }

export default {
    getHomepage,
    postHomepage
};