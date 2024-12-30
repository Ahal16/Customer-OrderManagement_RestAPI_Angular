import {Item} from "./item";

export class OrderItem {
    OrderItemId: number = 0;
    Quantity: number = 0;
    UnitePrice: number = 0;
    ItemId: number = 0;

    //Item
    item : Item = new Item();
}
