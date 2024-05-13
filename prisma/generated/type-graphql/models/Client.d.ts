import { Address } from "../models/Address";
import { Document } from "../models/Document";
import { Sale } from "../models/Sale";
import { ClientCount } from "../resolvers/outputs/ClientCount";
export declare class Client {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    email: string;
    documentId: string;
    document?: Document;
    addressId: string;
    address?: Address;
    sales?: Sale[];
    _count?: ClientCount | null;
}
