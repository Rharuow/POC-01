import { CategoriesProducts } from "../models/CategoriesProducts";
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
    categories?: CategoriesProducts[];
    orders?: Order[];
    _count?: ProductCount | null;
}
