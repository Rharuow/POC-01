import { ProductCreateNestedOneWithoutOrdersInput } from "../inputs/ProductCreateNestedOneWithoutOrdersInput";
import { SaleCreateNestedOneWithoutOrdersInput } from "../inputs/SaleCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    product: ProductCreateNestedOneWithoutOrdersInput;
    sale: SaleCreateNestedOneWithoutOrdersInput;
}
