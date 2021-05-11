import {Request, Response} from "express";
import {getConnection, Repository, DeleteResult} from "typeorm";
import {getRepository} from "typeorm";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import {User} from "../entity/User";
import * as fs from  "fs";


export async function getUsers(req: Request, res: Response): Promise<void> {
    const users: User[] = await getRepository(User).find();
        res.json(users);
}

export async function getUser(req: Request, res: Response): Promise<void> {
     const user: User = await getRepository(User).findOne(req.params.id);
         res.json(user);
}

export async function addUser(req: Request, res: Response): Promise<any> {
     const user: any = getRepository(User).create(req.body);

    // hash the password, to securely store on DB
     user.hashPassword();

    const results: User = await getRepository(User).save(user).catch( error => {
        const imagePhat: string = user.profilePicture.replace("http://aviadbenhayun.com:3000/", "./src/");
        if(fs.existsSync(imagePhat)) {
            fs.unlinkSync(imagePhat);
        }
     });
    return res.json(results);
}

export async function updateUser(req: Request, res: Response): Promise<any> {
    const user: User = await getRepository(User).findOne(req.params.id);
    if(user.profilePicture !== req.body.profilePicture) {
        const imagePhat: string = user.profilePicture.replace("http://aviadbenhayun.com:3000/", "./src/");
    if(fs.existsSync(imagePhat)) {
        fs.unlinkSync(imagePhat);
    }
    }
    getRepository(User).merge(user, req.body);
    const results: User = await getRepository(User).save(user);
    return res.json(results);
}

export async function deleteUser(req: Request, res: Response): Promise<any> {
    const user: User = await getRepository(User).findOne(req.params.id);
    const imagePhat: string = user.profilePicture.replace("http://aviadbenhayun.com:3000/", "./src/");
    if(fs.existsSync(imagePhat)) {
        fs.unlinkSync(imagePhat);
    }
    const results: DeleteResult = await getRepository(User).delete(req.params.id);
    return res.json(results);
}

export async function getUserByMail(req: Request, res: Response): Promise<any> {
      const user: User = await getRepository(User).findOne({ where: { email: req.params.email } });
      return res.json(user);
}
