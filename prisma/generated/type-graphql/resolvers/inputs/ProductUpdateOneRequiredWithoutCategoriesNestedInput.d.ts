import { ProductCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductCreateOrConnectWithoutCategoriesInput";
import { ProductCreateWithoutCategoriesInput } from "../inputs/ProductCreateWithoutCategoriesInput";
import { ProductUpdateToOneWithWhereWithoutCategoriesInput } from "../inputs/ProductUpdateToOneWithWhereWithoutCategoriesInput";
import { ProductUpsertWithoutCategoriesInput } from "../inputs/ProductUpsertWithoutCategoriesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutCategoriesNestedInput {
    create?: ProductCreateWithoutCategoriesInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput | undefined;
    upsert?: ProductUpsertWithoutCategoriesInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateToOneWithWhereWithoutCategoriesInput | undefined;
}
