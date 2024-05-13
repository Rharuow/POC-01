import { DocumentCreateWithoutClientInput } from "../inputs/DocumentCreateWithoutClientInput";
import { DocumentUpdateWithoutClientInput } from "../inputs/DocumentUpdateWithoutClientInput";
import { DocumentWhereInput } from "../inputs/DocumentWhereInput";
export declare class DocumentUpsertWithoutClientInput {
    update: DocumentUpdateWithoutClientInput;
    create: DocumentCreateWithoutClientInput;
    where?: DocumentWhereInput | undefined;
}
