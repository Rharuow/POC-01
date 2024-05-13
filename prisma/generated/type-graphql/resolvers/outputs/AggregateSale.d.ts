import { SaleAvgAggregate } from "../outputs/SaleAvgAggregate";
import { SaleCountAggregate } from "../outputs/SaleCountAggregate";
import { SaleMaxAggregate } from "../outputs/SaleMaxAggregate";
import { SaleMinAggregate } from "../outputs/SaleMinAggregate";
import { SaleSumAggregate } from "../outputs/SaleSumAggregate";
export declare class AggregateSale {
    _count: SaleCountAggregate | null;
    _avg: SaleAvgAggregate | null;
    _sum: SaleSumAggregate | null;
    _min: SaleMinAggregate | null;
    _max: SaleMaxAggregate | null;
}
