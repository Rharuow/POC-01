import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersInput } from "../inputs/ProductUpdateWithoutOrdersInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
export declare class ProductUpsertWithoutOrdersInput {
    update: ProductUpdateWithoutOrdersInput;
    create: ProductCreateWithoutOrdersInput;
    where?: ProductWhereInput | undefined;
}
