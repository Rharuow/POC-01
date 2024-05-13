import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
export declare class AggregateClient {
    _count: ClientCountAggregate | null;
    _min: ClientMinAggregate | null;
    _max: ClientMaxAggregate | null;
}
