import { DocumentCreateOrConnectWithoutClientInput } from "../inputs/DocumentCreateOrConnectWithoutClientInput";
import { DocumentCreateWithoutClientInput } from "../inputs/DocumentCreateWithoutClientInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentCreateNestedOneWithoutClientInput {
    create?: DocumentCreateWithoutClientInput | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | undefined;
    connect?: DocumentWhereUniqueInput | undefined;
}
