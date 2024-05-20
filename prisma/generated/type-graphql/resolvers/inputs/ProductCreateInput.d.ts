import { CategoriesProductsCreateNestedManyWithoutProductInput } from "../inputs/CategoriesProductsCreateNestedManyWithoutProductInput";
import { OrderItemCreateNestedManyWithoutProductInput } from "../inputs/OrderItemCreateNestedManyWithoutProductInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    description: string;
    inventory_quantity?: number | undefined;
    price?: number | undefined;
    categories?: CategoriesProductsCreateNestedManyWithoutProductInput | undefined;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput | undefined;
}
