"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
var jwt = require("jsonwebtoken");
var checkAuth = function (req, res, next) {
    try {
        var token = req.headers.authorization.split(" ")[1];
        var decodedToken = jwt.verify(token, process.env.JWTSECRET);
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next();
    }
    catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=check-auth.js.map