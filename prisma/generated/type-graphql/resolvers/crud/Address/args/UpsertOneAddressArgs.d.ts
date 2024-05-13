import { AddressCreateInput } from "../../../inputs/AddressCreateInput";
import { AddressUpdateInput } from "../../../inputs/AddressUpdateInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class UpsertOneAddressArgs {
    where: AddressWhereUniqueInput;
    create: AddressCreateInput;
    update: AddressUpdateInput;
}
