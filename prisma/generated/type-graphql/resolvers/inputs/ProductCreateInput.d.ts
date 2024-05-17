import { CategoriesProductsCreateNestedManyWithoutProductInput } from "../inputs/CategoriesProductsCreateNestedManyWithoutProductInput";
import { OrderCreateNestedManyWithoutProductInput } from "../inputs/OrderCreateNestedManyWithoutProductInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    description: string;
    inventory_quantity?: number | undefined;
    categories?: CategoriesProductsCreateNestedManyWithoutProductInput | undefined;
    orders?: OrderCreateNestedManyWithoutProductInput | undefined;
}
