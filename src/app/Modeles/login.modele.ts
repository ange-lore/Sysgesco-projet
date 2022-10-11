import { Role } from "./role.modele";

export class User {
    username!: string;
    password!: string;
    roles!: Role[];
}