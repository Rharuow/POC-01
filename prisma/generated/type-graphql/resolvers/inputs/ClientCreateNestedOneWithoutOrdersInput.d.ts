import { ClientCreateOrConnectWithoutOrdersInput } from "../inputs/ClientCreateOrConnectWithoutOrdersInput";
import { ClientCreateWithoutOrdersInput } from "../inputs/ClientCreateWithoutOrdersInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutOrdersInput {
    create?: ClientCreateWithoutOrdersInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
