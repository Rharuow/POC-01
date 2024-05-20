import { ProductCreateOrConnectWithoutOrderItemsInput } from "../inputs/ProductCreateOrConnectWithoutOrderItemsInput";
import { ProductCreateWithoutOrderItemsInput } from "../inputs/ProductCreateWithoutOrderItemsInput";
import { ProductUpdateToOneWithWhereWithoutOrderItemsInput } from "../inputs/ProductUpdateToOneWithWhereWithoutOrderItemsInput";
import { ProductUpsertWithoutOrderItemsInput } from "../inputs/ProductUpsertWithoutOrderItemsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutOrderItemsNestedInput {
    create?: ProductCreateWithoutOrderItemsInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput | undefined;
    upsert?: ProductUpsertWithoutOrderItemsInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateToOneWithWhereWithoutOrderItemsInput | undefined;
}
