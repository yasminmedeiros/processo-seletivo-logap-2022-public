import { ProductInterface } from "./product";

export interface ProviderInterface {
    id: number;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    products:ProductInterface[];
}
export interface PostPutProviderInterface {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
}
export interface ProviderLackStockInterface {
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    productsLenght:number;
}