import { SaleOrderByWithRelationInput } from "../../../inputs/SaleOrderByWithRelationInput";
import { SaleWhereInput } from "../../../inputs/SaleWhereInput";
import { SaleWhereUniqueInput } from "../../../inputs/SaleWhereUniqueInput";
export declare class AggregateSaleArgs {
    where?: SaleWhereInput | undefined;
    orderBy?: SaleOrderByWithRelationInput[] | undefined;
    cursor?: SaleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
