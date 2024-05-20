import { Order } from "../models/Order";
import { Product } from "../models/Product";
export declare class OrderItem {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    amount: number;
    totalPrice: number;
    productId: string;
    product?: Product;
    orderId: string;
    order?: Order;
}
