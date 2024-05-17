import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateWithoutCategoriesInput } from "../inputs/ProductUpdateWithoutCategoriesInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
export declare class ProductUpsertWithoutCategoriesInput {
    update: ProductUpdateWithoutCategoriesInput;
    create: ProductCreateWithoutCategoriesInput;
    where?: ProductWhereInput | undefined;
}
