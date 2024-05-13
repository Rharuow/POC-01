import { ClientUpdateOneWithoutDocumentNestedInput } from "../inputs/ClientUpdateOneWithoutDocumentNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DocumentUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    cpf?: NullableStringFieldUpdateOperationsInput | undefined;
    cnpj?: NullableStringFieldUpdateOperationsInput | undefined;
    clientId?: NullableStringFieldUpdateOperationsInput | undefined;
    client?: ClientUpdateOneWithoutDocumentNestedInput | undefined;
}
