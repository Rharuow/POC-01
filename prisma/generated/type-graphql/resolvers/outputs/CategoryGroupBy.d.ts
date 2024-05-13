import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
export declare class CategoryGroupBy {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date;
    name: string;
    _count: CategoryCountAggregate | null;
    _min: CategoryMinAggregate | null;
    _max: CategoryMaxAggregate | null;
}
