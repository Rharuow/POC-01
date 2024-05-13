import { OrderCreateNestedManyWithoutSaleInput } from "../inputs/OrderCreateNestedManyWithoutSaleInput";
export declare class SaleCreateWithoutClientInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    totalPrice: number;
    orders?: OrderCreateNestedManyWithoutSaleInput | undefined;
}
