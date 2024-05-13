import { Product } from "../models/Product";
import { Sale } from "../models/Sale";
export declare class Order {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    amount: number;
    totalPrice: number;
    productId: string;
    product?: Product;
    saleId: string;
    sale?: Sale;
}
