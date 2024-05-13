import { AddressCountAggregate } from "../outputs/AddressCountAggregate";
import { AddressMaxAggregate } from "../outputs/AddressMaxAggregate";
import { AddressMinAggregate } from "../outputs/AddressMinAggregate";
export declare class AggregateAddress {
    _count: AddressCountAggregate | null;
    _min: AddressMinAggregate | null;
    _max: AddressMaxAggregate | null;
}
