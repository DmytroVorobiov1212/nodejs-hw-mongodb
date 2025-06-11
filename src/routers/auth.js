import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserSchema, loginUserSchema } from "../validation/auth.js";
import { registerUserController, refreshUserSessionController, logoutUserController, loginUserController } from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController),);
router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController),);
router.post('/logout', ctrlWrapper(logoutUserController));
router.post('/refresh', ctrlWrapper(refreshUserSessionController));

export default router;