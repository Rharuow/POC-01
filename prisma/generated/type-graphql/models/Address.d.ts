import { Client } from "../models/Client";
export declare class Address {
    id: string;
    createdAt?: Date | null;
    deletedAt?: Date | null;
    updatedAt?: Date | null;
    billing?: string | null;
    delivery?: string | null;
    clientId: string;
    client?: Client;
}
