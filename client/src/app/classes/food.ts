import { Restaurant } from "./restaurant";
import { Ordered } from "./ordered";

export class Food {
    public id: number;
    public name: string;
    public price: number;
    public description: string;
    public image: string;

    public orders: Ordered[];
    public restaurants: Restaurant[];
}