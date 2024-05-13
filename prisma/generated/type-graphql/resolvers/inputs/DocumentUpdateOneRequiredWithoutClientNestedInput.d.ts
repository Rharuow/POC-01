import { DocumentCreateOrConnectWithoutClientInput } from "../inputs/DocumentCreateOrConnectWithoutClientInput";
import { DocumentCreateWithoutClientInput } from "../inputs/DocumentCreateWithoutClientInput";
import { DocumentUpdateToOneWithWhereWithoutClientInput } from "../inputs/DocumentUpdateToOneWithWhereWithoutClientInput";
import { DocumentUpsertWithoutClientInput } from "../inputs/DocumentUpsertWithoutClientInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentUpdateOneRequiredWithoutClientNestedInput {
    create?: DocumentCreateWithoutClientInput | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutClientInput | undefined;
    upsert?: DocumentUpsertWithoutClientInput | undefined;
    connect?: DocumentWhereUniqueInput | undefined;
    update?: DocumentUpdateToOneWithWhereWithoutClientInput | undefined;
}
