"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadRouter = void 0;
var express_1 = require("express");
var uploadController = require("../controllers/upload");
var userImages_1 = require("../middleware/userImages");
var router = express_1.Router();
router.post("/upload", userImages_1.uploadUserImage, uploadController.uploadImage);
exports.uploadRouter = router;
//# sourceMappingURL=upload.js.map