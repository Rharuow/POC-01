import { ClientCreateOrConnectWithoutSalesInput } from "../inputs/ClientCreateOrConnectWithoutSalesInput";
import { ClientCreateWithoutSalesInput } from "../inputs/ClientCreateWithoutSalesInput";
import { ClientUpdateToOneWithWhereWithoutSalesInput } from "../inputs/ClientUpdateToOneWithWhereWithoutSalesInput";
import { ClientUpsertWithoutSalesInput } from "../inputs/ClientUpsertWithoutSalesInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutSalesNestedInput {
    create?: ClientCreateWithoutSalesInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput | undefined;
    upsert?: ClientUpsertWithoutSalesInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutSalesInput | undefined;
}
