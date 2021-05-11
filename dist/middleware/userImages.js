"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadUserImage = void 0;
var multer = require("multer");
var MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var isValid = MIME_TYPE_MAP[file.mimetype];
        var error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "src/images");
    },
    filename: function (req, file, cb) {
        var name = file.originalname.toLowerCase().split("@");
        var ext = MIME_TYPE_MAP[file.mimetype];
        var stemp = Date.now();
        cb(null, stemp + "@" + name[0] + "." + ext);
    }
});
exports.uploadUserImage = multer({ storage: storage }).single("image");
//# sourceMappingURL=userImages.js.map