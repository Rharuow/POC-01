import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
export declare class AddressGroupBy {
    id: string;
    createdAt: Date | null;
    deletedAt: Date | null;
    updatedAt: Date | null;
    billing: string | null;
    delivery: string | null;
    clientId: string | null;
    _count: AddressCountAggregate | null;
    _min: AddressMinAggregate | null;
    _max: AddressMaxAggregate | null;
}
