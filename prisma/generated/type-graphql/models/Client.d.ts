import { Address } from "../models/Address";
import { Document } from "../models/Document";
import { Order } from "../models/Order";
import { ClientCount } from "../resolvers/outputs/ClientCount";
export declare class Client {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    email: string;
    documentId?: string | null;
    document?: Document | null;
    addressId?: string | null;
    address?: Address | null;
    Orders?: Order[];
    _count?: ClientCount | null;
}
