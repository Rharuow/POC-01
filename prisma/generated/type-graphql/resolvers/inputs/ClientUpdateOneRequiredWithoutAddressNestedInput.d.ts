import { ClientCreateOrConnectWithoutAddressInput } from "../inputs/ClientCreateOrConnectWithoutAddressInput";
import { ClientCreateWithoutAddressInput } from "../inputs/ClientCreateWithoutAddressInput";
import { ClientUpdateToOneWithWhereWithoutAddressInput } from "../inputs/ClientUpdateToOneWithWhereWithoutAddressInput";
import { ClientUpsertWithoutAddressInput } from "../inputs/ClientUpsertWithoutAddressInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutAddressNestedInput {
    create?: ClientCreateWithoutAddressInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput | undefined;
    upsert?: ClientUpsertWithoutAddressInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutAddressInput | undefined;
}
