import { Ordered } from "./ordered";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public address: string;
    public phone: string;
    public role: string;

    public orders: Ordered[];
}