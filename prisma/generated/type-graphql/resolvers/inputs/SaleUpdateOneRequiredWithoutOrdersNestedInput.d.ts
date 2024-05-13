import { SaleCreateOrConnectWithoutOrdersInput } from "../inputs/SaleCreateOrConnectWithoutOrdersInput";
import { SaleCreateWithoutOrdersInput } from "../inputs/SaleCreateWithoutOrdersInput";
import { SaleUpdateToOneWithWhereWithoutOrdersInput } from "../inputs/SaleUpdateToOneWithWhereWithoutOrdersInput";
import { SaleUpsertWithoutOrdersInput } from "../inputs/SaleUpsertWithoutOrdersInput";
import { SaleWhereUniqueInput } from "../inputs/SaleWhereUniqueInput";
export declare class SaleUpdateOneRequiredWithoutOrdersNestedInput {
    create?: SaleCreateWithoutOrdersInput | undefined;
    connectOrCreate?: SaleCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: SaleUpsertWithoutOrdersInput | undefined;
    connect?: SaleWhereUniqueInput | undefined;
    update?: SaleUpdateToOneWithWhereWithoutOrdersInput | undefined;
}
