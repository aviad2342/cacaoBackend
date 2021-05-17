import {Router} from "express";

import * as AuthController from "../controllers/auth";

// import * as extractFile from "../middleware/file";


const router: Router = Router();

router.post("/login", AuthController.login);



export const authRouter: Router = router;