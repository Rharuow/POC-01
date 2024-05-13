import { SaleCreateInput } from "../../../inputs/SaleCreateInput";
import { SaleUpdateInput } from "../../../inputs/SaleUpdateInput";
import { SaleWhereUniqueInput } from "../../../inputs/SaleWhereUniqueInput";
export declare class UpsertOneSaleArgs {
    where: SaleWhereUniqueInput;
    create: SaleCreateInput;
    update: SaleUpdateInput;
}
