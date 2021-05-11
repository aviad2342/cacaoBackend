"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
var express_1 = require("express");
var VideoController = require("../controllers/video");
var router = express_1.Router();
router.get("/videos", VideoController.getVideos);
router.get("/:id", VideoController.getVideo);
router.post("/video", VideoController.addVideo);
router.put("/update/:id", VideoController.updateVideo);
router.delete("/delete/:id", VideoController.deleteVideo);
exports.videoRouter = router;
//# sourceMappingURL=video.js.map