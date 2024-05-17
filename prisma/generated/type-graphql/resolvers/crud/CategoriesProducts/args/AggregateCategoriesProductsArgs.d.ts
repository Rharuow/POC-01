import { CategoriesProductsOrderByWithRelationInput } from "../../../inputs/CategoriesProductsOrderByWithRelationInput";
import { CategoriesProductsWhereInput } from "../../../inputs/CategoriesProductsWhereInput";
import { CategoriesProductsWhereUniqueInput } from "../../../inputs/CategoriesProductsWhereUniqueInput";
export declare class AggregateCategoriesProductsArgs {
    where?: CategoriesProductsWhereInput | undefined;
    orderBy?: CategoriesProductsOrderByWithRelationInput[] | undefined;
    cursor?: CategoriesProductsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
