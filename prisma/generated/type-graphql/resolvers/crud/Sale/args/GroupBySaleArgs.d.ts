import { SaleOrderByWithAggregationInput } from "../../../inputs/SaleOrderByWithAggregationInput";
import { SaleScalarWhereWithAggregatesInput } from "../../../inputs/SaleScalarWhereWithAggregatesInput";
import { SaleWhereInput } from "../../../inputs/SaleWhereInput";
export declare class GroupBySaleArgs {
    where?: SaleWhereInput | undefined;
    orderBy?: SaleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "totalPrice" | "clientId">;
    having?: SaleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
