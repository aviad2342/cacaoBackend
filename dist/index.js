"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
require("reflect-metadata");
var path = require("path");
var cors = require("cors");
var typeorm_1 = require("typeorm");
var user_1 = require("./routes/user");
var video_1 = require("./routes/video");
var upload_1 = require("./routes/upload");
var auth_1 = require("./routes/auth");
typeorm_1.createConnection().then(function (connection) {
    // create and setup express app
    var app = express();
    // the port the express app will listen on
    var port = process.env.PORT || "3200";
    app.use(cors({ origin: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static("src"));
    app.use("/images", express.static(path.join("cacaoBackend/src/images")));
    app.use("/assets", express.static(path.join("cacaoBackend/src/assets")));
    app.use("/assets/audio", express.static(path.join("cacaoBackend/src/assets/audio")));
    app.use("/auth", auth_1.authRouter);
    app.use("/user", user_1.userRouter);
    app.use("/video", video_1.videoRouter);
    app.use("/image", upload_1.uploadRouter);
    // app.use("/register",registrationRouter);
    // app.use("/comment",commentRouter);
    // app.use("/address",addressRouter);
    // app.use("/album",albumRouter);
    // app.use("/photo",photoRouter);
    // serve the application at the given port
    app.listen(port, function () {
        // success callback
        console.log("Listening at http://localhost:" + port + "/");
    });
}).catch(function (error) { return console.log(error); });
//# sourceMappingURL=index.js.map