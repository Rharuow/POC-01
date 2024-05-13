import { ClientCreateOrConnectWithoutAddressInput } from "../inputs/ClientCreateOrConnectWithoutAddressInput";
import { ClientCreateWithoutAddressInput } from "../inputs/ClientCreateWithoutAddressInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutAddressInput {
    create?: ClientCreateWithoutAddressInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
