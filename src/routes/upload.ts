import {Router} from "express";

import * as uploadController from "../controllers/upload";
import { uploadUserImage } from "../middleware/userImages";

const router: Router = Router();


router.post("/upload", uploadUserImage, uploadController.uploadImage);


export const uploadRouter: Router = router;