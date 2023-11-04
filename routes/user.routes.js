import express from "express";
const router = express.Router();
import dotenv from 'dotenv';
import userControllers from "../controllers/user.controllers.js";
dotenv.config();
router.get('/:userId', userControllers.getHomepage);
router.post('/:userId',userControllers.postHomepage);
// router.post('/:id', userControllers.postWatched);
export default router;