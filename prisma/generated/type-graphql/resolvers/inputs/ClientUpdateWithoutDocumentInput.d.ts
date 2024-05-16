import { AddressUpdateOneWithoutClientNestedInput } from "../inputs/AddressUpdateOneWithoutClientNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SaleUpdateManyWithoutClientNestedInput } from "../inputs/SaleUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUpdateWithoutDocumentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    documentId?: NullableStringFieldUpdateOperationsInput | undefined;
    addressId?: NullableStringFieldUpdateOperationsInput | undefined;
    address?: AddressUpdateOneWithoutClientNestedInput | undefined;
    sales?: SaleUpdateManyWithoutClientNestedInput | undefined;
}
