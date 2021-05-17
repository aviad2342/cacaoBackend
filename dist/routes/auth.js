"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var AuthController = require("../controllers/auth");
// import * as extractFile from "../middleware/file";
var router = express_1.Router();
router.post("/login", AuthController.login);
exports.authRouter = router;
//# sourceMappingURL=auth.js.map