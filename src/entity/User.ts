import {Entity, Column, BaseEntity, PrimaryColumn, BeforeInsert, TableInheritance} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User extends BaseEntity {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", {length:255})
    firstName: string;

    @Column("varchar", {length:255})
    lastName: string;

    @Column("varchar", {length:255})
    password: string;

    @Column("varchar", {length:255, unique: true})
    phone: string;

    @Column("varchar", {length:255, unique: true})
    email: string;

    @Column("datetime")
    date: Date;

    @Column("varchar", {length:255})
    profilePicture: string;

    @BeforeInsert()
    addId(): void {
        this.id = uuidv4();
    }

    hashPassword(): void {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}
