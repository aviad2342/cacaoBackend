import {Request, Response} from "express";
import * as fs from  "fs";

export async function uploadImage(req: Request, res: Response): Promise<any> {
    const url: string = req.protocol + "://" + req.get("host") + "/images/" + req.file.filename;
    return res.json({imageUrl: url});
}


