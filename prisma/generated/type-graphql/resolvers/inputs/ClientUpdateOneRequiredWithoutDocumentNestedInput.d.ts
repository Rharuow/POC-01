import { ClientCreateOrConnectWithoutDocumentInput } from "../inputs/ClientCreateOrConnectWithoutDocumentInput";
import { ClientCreateWithoutDocumentInput } from "../inputs/ClientCreateWithoutDocumentInput";
import { ClientUpdateToOneWithWhereWithoutDocumentInput } from "../inputs/ClientUpdateToOneWithWhereWithoutDocumentInput";
import { ClientUpsertWithoutDocumentInput } from "../inputs/ClientUpsertWithoutDocumentInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneRequiredWithoutDocumentNestedInput {
    create?: ClientCreateWithoutDocumentInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentInput | undefined;
    upsert?: ClientUpsertWithoutDocumentInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutDocumentInput | undefined;
}
