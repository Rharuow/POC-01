import { ProductCreateWithoutOrderItemsInput } from "../inputs/ProductCreateWithoutOrderItemsInput";
import { ProductUpdateWithoutOrderItemsInput } from "../inputs/ProductUpdateWithoutOrderItemsInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
export declare class ProductUpsertWithoutOrderItemsInput {
    update: ProductUpdateWithoutOrderItemsInput;
    create: ProductCreateWithoutOrderItemsInput;
    where?: ProductWhereInput | undefined;
}
