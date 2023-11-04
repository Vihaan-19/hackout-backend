import express from "express";
const router = express.Router();
import dotenv from 'dotenv';
import teamControllers from "../controllers/team.controllers.js";
dotenv.config();
router.post('/create', teamControllers.createTeam);
router.post('/join/:teamId',teamControllers.joinTeam);
export default router;