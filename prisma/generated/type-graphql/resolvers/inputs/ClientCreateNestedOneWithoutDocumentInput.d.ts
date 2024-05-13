import { ClientCreateOrConnectWithoutDocumentInput } from "../inputs/ClientCreateOrConnectWithoutDocumentInput";
import { ClientCreateWithoutDocumentInput } from "../inputs/ClientCreateWithoutDocumentInput";
import { ClientWhereUniqueInput } from "../inputs/ClientWhereUniqueInput";
export declare class ClientCreateNestedOneWithoutDocumentInput {
    create?: ClientCreateWithoutDocumentInput | undefined;
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentInput | undefined;
    connect?: ClientWhereUniqueInput | undefined;
}
