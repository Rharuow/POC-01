import { ClientOrderByWithAggregationInput } from "../../../inputs/ClientOrderByWithAggregationInput";
import { ClientScalarWhereWithAggregatesInput } from "../../../inputs/ClientScalarWhereWithAggregatesInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
export declare class GroupByClientArgs {
    where?: ClientWhereInput | undefined;
    orderBy?: ClientOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "name" | "email" | "documentId" | "addressId">;
    having?: ClientScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
