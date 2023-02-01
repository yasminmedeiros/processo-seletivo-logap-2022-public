import { ProductInterface } from "./product";

export interface CategoryInterface {
    id: number;
    name: string;
    products:ProductInterface[];
}
export interface CategoryStockInterface {
    name: string;
    productsLenght:number;
}
export interface PostPutCategoryInterface {
    name: string;
}
