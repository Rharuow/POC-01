import { Category } from "../models/Category";
import { Product } from "../models/Product";
export declare class CategoriesProducts {
    id: string;
    categoryName: string;
    category?: Category;
    productId: string;
    product?: Product;
}
