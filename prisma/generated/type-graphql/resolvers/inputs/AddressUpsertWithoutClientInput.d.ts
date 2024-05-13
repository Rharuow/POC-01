import { AddressCreateWithoutClientInput } from "../inputs/AddressCreateWithoutClientInput";
import { AddressUpdateWithoutClientInput } from "../inputs/AddressUpdateWithoutClientInput";
import { AddressWhereInput } from "../inputs/AddressWhereInput";
export declare class AddressUpsertWithoutClientInput {
    update: AddressUpdateWithoutClientInput;
    create: AddressCreateWithoutClientInput;
    where?: AddressWhereInput | undefined;
}
