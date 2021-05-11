import {Entity, Column, PrimaryColumn, BeforeInsert} from "typeorm";
import { v4 as uuidv4 } from "uuid";


@Entity()
export class Video {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", {length:255})
    videoId: string;

    @Column("varchar", {length:255})
    videoURL: string;

    @Column("varchar", {length:255})
    embed: string;

    @Column("varchar", {length:255})
    title: string;

    @Column("varchar", {length:255})
    description: string;

    @Column("varchar", {length:255})
    category: string;

    @Column("datetime")
    date: Date;

    @Column("varchar", {length:255})
    thumbnail: string;

    @BeforeInsert()
    addId(): void {
        this.id = uuidv4();
    }

}