import {Request, Response} from "express";
import {getConnection, Repository, DeleteResult} from "typeorm";
import {getRepository} from "typeorm";
import { Video } from "../entity/Video";


export async function getVideos(req: Request, res: Response): Promise<void> {
    const videos: Video[] = await getRepository(Video).find();
        res.json(videos);
}

export async function getVideo(req: Request, res: Response): Promise<void> {
     const video: Video = await getRepository(Video).findOne(req.params.id);
         res.json(video);
 }

 export async function addVideo(req: Request, res: Response): Promise<any> {
     const video: any = getRepository(Video).create(req.body);
     const result: Video = await getRepository(Video).save(video);
     return res.json(result);
}

export async function updateVideo(req: Request, res: Response): Promise<any> {
    const video: Video = await getRepository(Video).findOne(req.params.id);
    getRepository(Video).merge(video, req.body);
    const result: Video = await getRepository(Video).save(video);
    return res.json(result);
}

export async function deleteVideo(req: Request, res: Response): Promise<any> {
    const result: DeleteResult = await getRepository(Video).delete(req.params.id);
    return res.json(result);
}