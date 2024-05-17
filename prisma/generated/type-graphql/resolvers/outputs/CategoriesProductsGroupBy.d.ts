import { CategoriesProductsCountAggregate } from "../outputs/CategoriesProductsCountAggregate";
import { CategoriesProductsMaxAggregate } from "../outputs/CategoriesProductsMaxAggregate";
import { CategoriesProductsMinAggregate } from "../outputs/CategoriesProductsMinAggregate";
export declare class CategoriesProductsGroupBy {
    id: string;
    categoryName: string;
    productId: string;
    _count: CategoriesProductsCountAggregate | null;
    _min: CategoriesProductsMinAggregate | null;
    _max: CategoriesProductsMaxAggregate | null;
}
