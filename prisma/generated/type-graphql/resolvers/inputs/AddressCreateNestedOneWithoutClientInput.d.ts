import { AddressCreateOrConnectWithoutClientInput } from "../inputs/AddressCreateOrConnectWithoutClientInput";
import { AddressCreateWithoutClientInput } from "../inputs/AddressCreateWithoutClientInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressCreateNestedOneWithoutClientInput {
    create?: AddressCreateWithoutClientInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
}
