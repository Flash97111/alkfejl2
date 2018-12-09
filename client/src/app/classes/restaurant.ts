import { Food } from "./food";
import { Order } from "./order";

export class Restaurant {
    public id: number;
    public name: string;
    public address: string;
    public phone: string;

    public foods: Food[];
    public orders: Order[];
}