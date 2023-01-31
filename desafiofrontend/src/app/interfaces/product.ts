export interface ProductInterface {
    id: number;
    name: string;
    value_send: number;
    value_buy: number;
    quantity: number;
    quantity_minimum: number;
}
export interface PostPutProductInterface {
    name: string;
    value_send: number;
    value_buy: number;
    quantity: number;
    quantity_minimum: number;
}
