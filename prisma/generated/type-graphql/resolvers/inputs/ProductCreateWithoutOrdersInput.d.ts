import { CategoriesProductsCreateNestedManyWithoutProductInput } from "../inputs/CategoriesProductsCreateNestedManyWithoutProductInput";
export declare class ProductCreateWithoutOrdersInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    description: string;
    inventory_quantity?: number | undefined;
    categories?: CategoriesProductsCreateNestedManyWithoutProductInput | undefined;
}
