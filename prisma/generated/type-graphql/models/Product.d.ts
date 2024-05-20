import { CategoriesProducts } from "../models/CategoriesProducts";
import { OrderItem } from "../models/OrderItem";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    description: string;
    inventory_quantity: number;
    price: number;
    categories?: CategoriesProducts[];
    orderItems?: OrderItem[];
    _count?: ProductCount | null;
}
