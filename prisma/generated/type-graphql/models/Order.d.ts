import { Client } from "../models/Client";
import { OrderItem } from "../models/OrderItem";
import { OrderCount } from "../resolvers/outputs/OrderCount";
export declare class Order {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    totalPrice: number;
    orderItems?: OrderItem[];
    clientId: string;
    client?: Client;
    _count?: OrderCount | null;
}
