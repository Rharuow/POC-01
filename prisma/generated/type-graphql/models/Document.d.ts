import { Client } from "../models/Client";
export declare class Document {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    cpf?: string | null;
    cnpj?: string | null;
    clientId?: string | null;
    client?: Client | null;
}
