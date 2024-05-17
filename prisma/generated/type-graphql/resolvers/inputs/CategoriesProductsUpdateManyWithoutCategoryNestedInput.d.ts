import { CategoriesProductsCreateManyCategoryInputEnvelope } from "../inputs/CategoriesProductsCreateManyCategoryInputEnvelope";
import { CategoriesProductsCreateOrConnectWithoutCategoryInput } from "../inputs/CategoriesProductsCreateOrConnectWithoutCategoryInput";
import { CategoriesProductsCreateWithoutCategoryInput } from "../inputs/CategoriesProductsCreateWithoutCategoryInput";
import { CategoriesProductsScalarWhereInput } from "../inputs/CategoriesProductsScalarWhereInput";
import { CategoriesProductsUpdateManyWithWhereWithoutCategoryInput } from "../inputs/CategoriesProductsUpdateManyWithWhereWithoutCategoryInput";
import { CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput";
import { CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput";
import { CategoriesProductsWhereUniqueInput } from "../inputs/CategoriesProductsWhereUniqueInput";
export declare class CategoriesProductsUpdateManyWithoutCategoryNestedInput {
    create?: CategoriesProductsCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: CategoriesProductsCreateOrConnectWithoutCategoryInput[] | undefined;
    upsert?: CategoriesProductsUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;
    createMany?: CategoriesProductsCreateManyCategoryInputEnvelope | undefined;
    set?: CategoriesProductsWhereUniqueInput[] | undefined;
    disconnect?: CategoriesProductsWhereUniqueInput[] | undefined;
    delete?: CategoriesProductsWhereUniqueInput[] | undefined;
    connect?: CategoriesProductsWhereUniqueInput[] | undefined;
    update?: CategoriesProductsUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;
    updateMany?: CategoriesProductsUpdateManyWithWhereWithoutCategoryInput[] | undefined;
    deleteMany?: CategoriesProductsScalarWhereInput[] | undefined;
}
