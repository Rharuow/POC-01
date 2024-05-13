import { ClientCreateOrConnectWithoutAddressInput } from "../inputs/ClientCreateOrConnectWithoutAddressInput";
import { ClientCreateWithoutAddressInput } from "../inputs/ClientCreateWithoutAddressInput";
import { ClientUpdateToOneWithWhereWithoutAddressInput } from "../inputs/ClientUpdateToOneWithWhereWithoutAddressInput";
import { ClientUpsertWithoutAddressInput } from "../inputs/ClientUpsertWithoutAddressInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneWithoutAddressNestedInput {
    create?: ClientCreateWithoutAddressInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput | undefined;
    upsert?: ClientUpsertWithoutAddressInput | undefined;
    disconnect?: ClientWhereInput | undefined;
    delete?: ClientWhereInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutAddressInput | undefined;
}
