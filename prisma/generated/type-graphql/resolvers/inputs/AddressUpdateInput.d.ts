import { ClientUpdateOneWithoutAddressNestedInput } from "../inputs/ClientUpdateOneWithoutAddressNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AddressUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    billing?: NullableStringFieldUpdateOperationsInput | undefined;
    delivery?: NullableStringFieldUpdateOperationsInput | undefined;
    clientId?: NullableStringFieldUpdateOperationsInput | undefined;
    client?: ClientUpdateOneWithoutAddressNestedInput | undefined;
}
