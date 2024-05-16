import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneWithoutClientNestedInput } from "../inputs/DocumentUpdateOneWithoutClientNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SaleUpdateManyWithoutClientNestedInput } from "../inputs/SaleUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUpdateWithoutAddressInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    documentId?: NullableStringFieldUpdateOperationsInput | undefined;
    addressId?: NullableStringFieldUpdateOperationsInput | undefined;
    document?: DocumentUpdateOneWithoutClientNestedInput | undefined;
    sales?: SaleUpdateManyWithoutClientNestedInput | undefined;
}
