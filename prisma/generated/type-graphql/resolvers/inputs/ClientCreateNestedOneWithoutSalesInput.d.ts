import { ClientCreateOrConnectWithoutSalesInput } from "../inputs/ClientCreateOrConnectWithoutSalesInput";
import { ClientCreateWithoutSalesInput } from "../inputs/ClientCreateWithoutSalesInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutSalesInput {
    create?: ClientCreateWithoutSalesInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
