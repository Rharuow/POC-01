import { ClientCreateNestedOneWithoutSalesInput } from "../inputs/ClientCreateNestedOneWithoutSalesInput";
import { OrderCreateNestedManyWithoutSaleInput } from "../inputs/OrderCreateNestedManyWithoutSaleInput";
export declare class SaleCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    totalPrice: number;
    orders?: OrderCreateNestedManyWithoutSaleInput | undefined;
    client: ClientCreateNestedOneWithoutSalesInput;
}
