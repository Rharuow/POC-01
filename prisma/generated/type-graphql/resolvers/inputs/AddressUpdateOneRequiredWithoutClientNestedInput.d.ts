import { AddressCreateOrConnectWithoutClientInput } from "../inputs/AddressCreateOrConnectWithoutClientInput";
import { AddressCreateWithoutClientInput } from "../inputs/AddressCreateWithoutClientInput";
import { AddressUpdateToOneWithWhereWithoutClientInput } from "../inputs/AddressUpdateToOneWithWhereWithoutClientInput";
import { AddressUpsertWithoutClientInput } from "../inputs/AddressUpsertWithoutClientInput";
import { AddressWhereUniqueInput } from "../inputs/AddressWhereUniqueInput";
export declare class AddressUpdateOneRequiredWithoutClientNestedInput {
    create?: AddressCreateWithoutClientInput | undefined;
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput | undefined;
    upsert?: AddressUpsertWithoutClientInput | undefined;
    connect?: AddressWhereUniqueInput | undefined;
    update?: AddressUpdateToOneWithWhereWithoutClientInput | undefined;
}
