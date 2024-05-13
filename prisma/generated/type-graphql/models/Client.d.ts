import { Address } from "../models/Address";
import { Document } from "../models/Document";
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
}
