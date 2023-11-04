import express from "express";
const router = express.Router();
import dotenv from 'dotenv';
import userControllers from "../controllers/user.controllers.js";
dotenv.config();
router.get('/', userControllers.getHomepage);
router.post('/:id',userControllers.postHomepage);
// router.post('/:id', userControllers.postWatched);
export default router;