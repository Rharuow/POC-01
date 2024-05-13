import { Category } from "../models/Category";
import { Order } from "../models/Order";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    description: string;
    inventory_quantity: number;
    categories?: Category[];
    orders?: Order[];
    _count?: ProductCount | null;
}
