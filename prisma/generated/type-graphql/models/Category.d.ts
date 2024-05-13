import { Product } from "../models/Product";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
export declare class Category {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    produtos?: Product[];
    _count?: CategoryCount | null;
}
