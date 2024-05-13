import { SaleCreateOrConnectWithoutOrdersInput } from "../inputs/SaleCreateOrConnectWithoutOrdersInput";
import { SaleCreateWithoutOrdersInput } from "../inputs/SaleCreateWithoutOrdersInput";
import { SaleWhereUniqueInput } from "../inputs/SaleWhereUniqueInput";
export declare class SaleCreateNestedOneWithoutOrdersInput {
    create?: SaleCreateWithoutOrdersInput | undefined;
    connectOrCreate?: SaleCreateOrConnectWithoutOrdersInput | undefined;
    connect?: SaleWhereUniqueInput | undefined;
}
