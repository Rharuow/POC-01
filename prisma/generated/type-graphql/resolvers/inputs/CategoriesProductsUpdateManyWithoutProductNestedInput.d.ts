import { CategoriesProductsCreateManyProductInputEnvelope } from "../inputs/CategoriesProductsCreateManyProductInputEnvelope";
import { CategoriesProductsCreateOrConnectWithoutProductInput } from "../inputs/CategoriesProductsCreateOrConnectWithoutProductInput";
import { CategoriesProductsCreateWithoutProductInput } from "../inputs/CategoriesProductsCreateWithoutProductInput";
import { CategoriesProductsScalarWhereInput } from "../inputs/CategoriesProductsScalarWhereInput";
import { CategoriesProductsUpdateManyWithWhereWithoutProductInput } from "../inputs/CategoriesProductsUpdateManyWithWhereWithoutProductInput";
import { CategoriesProductsUpdateWithWhereUniqueWithoutProductInput } from "../inputs/CategoriesProductsUpdateWithWhereUniqueWithoutProductInput";
import { CategoriesProductsUpsertWithWhereUniqueWithoutProductInput } from "../inputs/CategoriesProductsUpsertWithWhereUniqueWithoutProductInput";
import { CategoriesProductsWhereUniqueInput } from "../inputs/CategoriesProductsWhereUniqueInput";
export declare class CategoriesProductsUpdateManyWithoutProductNestedInput {
    create?: CategoriesProductsCreateWithoutProductInput[] | undefined;
    connectOrCreate?: CategoriesProductsCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: CategoriesProductsUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: CategoriesProductsCreateManyProductInputEnvelope | undefined;
    set?: CategoriesProductsWhereUniqueInput[] | undefined;
    disconnect?: CategoriesProductsWhereUniqueInput[] | undefined;
    delete?: CategoriesProductsWhereUniqueInput[] | undefined;
    connect?: CategoriesProductsWhereUniqueInput[] | undefined;
    update?: CategoriesProductsUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: CategoriesProductsUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: CategoriesProductsScalarWhereInput[] | undefined;
}
