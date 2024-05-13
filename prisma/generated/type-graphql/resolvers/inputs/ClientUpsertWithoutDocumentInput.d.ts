import { ClientCreateWithoutDocumentInput } from "../inputs/ClientCreateWithoutDocumentInput";
import { ClientUpdateWithoutDocumentInput } from "../inputs/ClientUpdateWithoutDocumentInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutDocumentInput {
    update: ClientUpdateWithoutDocumentInput;
    create: ClientCreateWithoutDocumentInput;
    where?: ClientWhereInput | undefined;
}
