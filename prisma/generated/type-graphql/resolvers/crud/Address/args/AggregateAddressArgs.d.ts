import { AddressOrderByWithRelationInput } from "../../../inputs/AddressOrderByWithRelationInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
import { AddressWhereUniqueInput } from "../../../inputs/AddressWhereUniqueInput";
export declare class AggregateAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByWithRelationInput[] | undefined;
    cursor?: AddressWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
