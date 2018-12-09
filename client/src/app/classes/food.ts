import { Restaurant } from "./restaurant";
import { Order } from "./order";

export class Food {
    public id: number;
    public name: string;
    public price: number;
    public description: string;
    public image: string;

    public orders: Order[];
    public restaurants: Restaurant[];
}