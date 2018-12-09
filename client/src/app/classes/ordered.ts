import { User } from "./user";
import { Food } from "./food";
import { Restaurant } from "./restaurant";

export class Ordered {
    public id: number;
    public qty: number;
    public date: Date;

    public user: User;
    public food: Food;
    public restaurant: Restaurant;
}