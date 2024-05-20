import { ClientCreateOrConnectWithoutOrdersInput } from "../inputs/ClientCreateOrConnectWithoutOrdersInput";
import { ClientCreateWithoutOrdersInput } from "../inputs/ClientCreateWithoutOrdersInput";
import { ClientUpdateToOneWithWhereWithoutOrdersInput } from "../inputs/ClientUpdateToOneWithWhereWithoutOrdersInput";
import { ClientUpsertWithoutOrdersInput } from "../inputs/ClientUpsertWithoutOrdersInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutOrdersNestedInput {
    create?: ClientCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput | undefined;
    upsert?: ClientUpsertWithoutOrdersInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutOrdersInput | undefined;
}
