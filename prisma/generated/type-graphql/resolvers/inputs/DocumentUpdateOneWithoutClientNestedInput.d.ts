import { DocumentCreateOrConnectWithoutClientInput } from "../inputs/DocumentCreateOrConnectWithoutClientInput";
import { DocumentCreateWithoutClientInput } from "../inputs/DocumentCreateWithoutClientInput";
import { DocumentUpdateToOneWithWhereWithoutClientInput } from "../inputs/DocumentUpdateToOneWithWhereWithoutClientInput";
import { DocumentUpsertWithoutClientInput } from "../inputs/DocumentUpsertWithoutClientInput";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentUpdateOneWithoutClientNestedInput {
    create?: DocumentCreateWithoutClientInput | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | undefined;
    upsert?: DocumentUpsertWithoutClientInput | undefined;
    disconnect?: DocumentWhereInput | undefined;
    delete?: DocumentWhereInput | undefined;
    connect?: DocumentWhereUniqueInput | undefined;
    update?: DocumentUpdateToOneWithWhereWithoutClientInput | undefined;
}
