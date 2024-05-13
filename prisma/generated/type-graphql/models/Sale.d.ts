import { Client } from "../models/Client";
import { Order } from "../models/Order";
import { SaleCount } from "../resolvers/outputs/SaleCount";
export declare class Sale {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    totalPrice: number;
    orders?: Order[];
    clientId: string;
    client?: Client;
    _count?: SaleCount | null;
}
