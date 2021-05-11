"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = require("express");
var UserController = require("../controllers/user");
var router = express_1.Router();
router.get("/users", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.get("/email/:email", UserController.getUserByMail);
router.post("/user", UserController.addUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);
exports.userRouter = router;
//# sourceMappingURL=user.js.map