import { ProductCreateOrConnectWithoutOrderItemsInput } from "../inputs/ProductCreateOrConnectWithoutOrderItemsInput";
import { ProductCreateWithoutOrderItemsInput } from "../inputs/ProductCreateWithoutOrderItemsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutOrderItemsInput {
    create?: ProductCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
