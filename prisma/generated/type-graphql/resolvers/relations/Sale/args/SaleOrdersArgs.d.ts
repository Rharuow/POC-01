import { OrderOrderByWithRelationInput } from "../../../inputs/OrderOrderByWithRelationInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class SaleOrdersArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByWithRelationInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "amount" | "totalPrice" | "productId" | "saleId"> | undefined;
}
