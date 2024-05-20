import { ProductAvgAggregate } from "../outputs/ProductAvgAggregate";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";
import { ProductSumAggregate } from "../outputs/ProductSumAggregate";
export declare class ProductGroupBy {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date;
    name: string;
    description: string;
    inventory_quantity: number;
    price: number;
    _count: ProductCountAggregate | null;
    _avg: ProductAvgAggregate | null;
    _sum: ProductSumAggregate | null;
    _min: ProductMinAggregate | null;
    _max: ProductMaxAggregate | null;
}
