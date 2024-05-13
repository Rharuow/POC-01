import { ClientCreateOrConnectWithoutDocumentInput } from "../inputs/ClientCreateOrConnectWithoutDocumentInput";
import { ClientCreateWithoutDocumentInput } from "../inputs/ClientCreateWithoutDocumentInput";
import { ClientUpdateToOneWithWhereWithoutDocumentInput } from "../inputs/ClientUpdateToOneWithWhereWithoutDocumentInput";
import { ClientUpsertWithoutDocumentInput } from "../inputs/ClientUpsertWithoutDocumentInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientUpdateOneWithoutDocumentNestedInput {
    create?: ClientCreateWithoutDocumentInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentInput | undefined;
    upsert?: ClientUpsertWithoutDocumentInput | undefined;
    disconnect?: ClientWhereInput | undefined;
    delete?: ClientWhereInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
    update?: ClientUpdateToOneWithWhereWithoutDocumentInput | undefined;
}
