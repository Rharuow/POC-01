import { CategoriesProductsCreateManyProductInputEnvelope } from "../inputs/CategoriesProductsCreateManyProductInputEnvelope";
import { CategoriesProductsCreateOrConnectWithoutProductInput } from "../inputs/CategoriesProductsCreateOrConnectWithoutProductInput";
import { CategoriesProductsCreateWithoutProductInput } from "../inputs/CategoriesProductsCreateWithoutProductInput";
import { CategoriesProductsWhereUniqueInput } from "../inputs/CategoriesProductsWhereUniqueInput";
export declare class CategoriesProductsCreateNestedManyWithoutProductInput {
    create?: CategoriesProductsCreateWithoutProductInput[] | undefined;
    connectOrCreate?: CategoriesProductsCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: CategoriesProductsCreateManyProductInputEnvelope | undefined;
    connect?: CategoriesProductsWhereUniqueInput[] | undefined;
}
