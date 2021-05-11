import {Router} from "express";

import * as VideoController from "../controllers/video";


const router: Router = Router();

router.get("/videos", VideoController.getVideos);

router.get("/:id", VideoController.getVideo);

router.post("/video", VideoController.addVideo);

router.put("/update/:id", VideoController.updateVideo);

router.delete("/delete/:id", VideoController.deleteVideo);


export const videoRouter: Router = router;