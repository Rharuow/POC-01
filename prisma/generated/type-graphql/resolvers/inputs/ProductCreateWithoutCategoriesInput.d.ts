import { OrderItemCreateNestedManyWithoutProductInput } from "../inputs/OrderItemCreateNestedManyWithoutProductInput";
export declare class ProductCreateWithoutCategoriesInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    description: string;
    inventory_quantity?: number | undefined;
    price?: number | undefined;
    orderItems?: OrderItemCreateNestedManyWithoutProductInput | undefined;
}
