import { CategoriesProducts } from "../models/CategoriesProducts";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
export declare class Category {
    id: string;
    createdAt: Date;
    deletedAt?: Date | null;
    updatedAt: Date;
    name: string;
    produtos?: CategoriesProducts[];
    _count?: CategoryCount | null;
}
