import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
export declare class ClientGroupBy {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date;
    name: string;
    email: string;
    documentId: string | null;
    addressId: string | null;
    _count: ClientCountAggregate | null;
    _min: ClientMinAggregate | null;
    _max: ClientMaxAggregate | null;
}
