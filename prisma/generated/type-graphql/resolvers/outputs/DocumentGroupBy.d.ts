import { DocumentCountAggregate } from "../outputs/DocumentCountAggregate";
import { DocumentMaxAggregate } from "../outputs/DocumentMaxAggregate";
import { DocumentMinAggregate } from "../outputs/DocumentMinAggregate";
export declare class DocumentGroupBy {
    id: string;
    createdAt: Date;
    deletedAt: Date | null;
    updatedAt: Date;
    cpf: string | null;
    cnpj: string | null;
    clientId: string | null;
    _count: DocumentCountAggregate | null;
    _min: DocumentMinAggregate | null;
    _max: DocumentMaxAggregate | null;
}
