import * as express from "express";
import "reflect-metadata";
import * as path from  "path";
import * as cors from "cors";
import { createConnection } from "typeorm";
import { userRouter } from "./routes/user";
import { videoRouter } from "./routes/video";
import { uploadRouter } from "./routes/upload";


createConnection().then(connection => {

    // create and setup express app
    const app: express.Application = express();
   // the port the express app will listen on
    const port: string = process.env.PORT || "3200";

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
      next();
    });

    app.use(express.static("src"));
    app.use("/images", express.static(path.join("cacaoBackend/src/images")));
    app.use("/assets", express.static(path.join("cacaoBackend/src/assets")));
    app.use("/assets/audio", express.static(path.join("cacaoBackend/src/assets/audio")));


    app.use("/user",userRouter);
    app.use("/video",videoRouter);
    app.use("/image",uploadRouter);
    // app.use("/register",registrationRouter);
    // app.use("/auth",authRouter);
    // app.use("/comment",commentRouter);
    // app.use("/address",addressRouter);
    // app.use("/album",albumRouter);
    // app.use("/photo",photoRouter);



    // serve the application at the given port
    app.listen(port, () => {
  // success callback
      console.log(`Listening at http://localhost:${port}/`);
    });
  }).catch(error => console.log(error));
