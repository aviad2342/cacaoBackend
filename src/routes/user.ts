import {Router} from "express";

import * as UserController from "../controllers/user";


const router: Router = Router();

router.get("/users", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.get("/email/:email", UserController.getUserByMail);

router.post("/user", UserController.addUser);

router.put("/update/:id", UserController.updateUser);

router.delete("/delete/:id", UserController.deleteUser);


export const userRouter: Router = router;