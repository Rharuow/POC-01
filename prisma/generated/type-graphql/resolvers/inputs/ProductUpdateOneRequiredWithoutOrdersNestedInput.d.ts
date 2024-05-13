import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateToOneWithWhereWithoutOrdersInput } from "../inputs/ProductUpdateToOneWithWhereWithoutOrdersInput";
import { ProductUpsertWithoutOrdersInput } from "../inputs/ProductUpsertWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutOrdersNestedInput {
    create?: ProductCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: ProductUpsertWithoutOrdersInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateToOneWithWhereWithoutOrdersInput | undefined;
}
