import { AddressCreateOrConnectWithoutClientInput } from "../inputs/AddressCreateOrConnectWithoutClientInput";
import { AddressCreateWithoutClientInput } from "../inputs/AddressCreateWithoutClientInput";
import { AddressUpdateToOneWithWhereWithoutClientInput } from "../inputs/AddressUpdateToOneWithWhereWithoutClientInput";
import { AddressUpsertWithoutClientInput } from "../inputs/AddressUpsertWithoutClientInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneWithoutClientNestedInput {
    create?: AddressCreateWithoutClientInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | undefined;
    upsert?: AddressUpsertWithoutClientInput | undefined;
    disconnect?: AddressWhereInput | undefined;
    delete?: AddressWhereInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUpdateToOneWithWhereWithoutClientInput | undefined;
}
