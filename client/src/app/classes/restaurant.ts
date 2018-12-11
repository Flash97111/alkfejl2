import { Food } from "./food";
import { Ordered } from "./ordered";

export class Restaurant {
    public id: number;
    public name: string;
    public address: string;
    public tel: string;

    public foods: Food[];
    public orders: Ordered[];
}