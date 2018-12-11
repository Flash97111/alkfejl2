import { Ordered } from "./ordered";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public address: string;
    public tel: string;
    public role: string;

    public orders: Ordered[];
}