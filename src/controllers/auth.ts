import {Request, Response} from "express";
import {getConnection, Repository, DeleteResult} from "typeorm";
import {getRepository} from "typeorm";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {User} from "../entity/User";
import config from "../config/config";


export async function login(req: Request, res: Response): Promise<void> {

    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }

    let user: User;

    try {
        user = await getRepository(User).findOneOrFail({ where: { email } });
      } catch (error) {
        res.status(401).json({ error: "EMAIL_NOT_FOUND" });
      }

      // check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).json({ error: "INVALID_PASSWORD" });
        return;
      }

     // sing JWT, valid for 1 hour
    const token: any = jwt.sign(
        { userId: user.id, email: user.email },
        config.jwtSecret,
        { expiresIn: "1h" }
      );
    // send the jwt in the response
    res.status(200).json({
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
        token,
        expiresIn: 3600,
      });
}