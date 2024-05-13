import { AddressOrderByWithAggregationInput } from "../../../inputs/AddressOrderByWithAggregationInput";
import { AddressScalarWhereWithAggregatesInput } from "../../../inputs/AddressScalarWhereWithAggregatesInput";
import { AddressWhereInput } from "../../../inputs/AddressWhereInput";
export declare class GroupByAddressArgs {
    where?: AddressWhereInput | undefined;
    orderBy?: AddressOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "billing" | "delivery" | "clientId">;
    having?: AddressScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
