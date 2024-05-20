import { AddressUpdateOneWithoutClientNestedInput } from "../inputs/AddressUpdateOneWithoutClientNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateOneWithoutClientNestedInput } from "../inputs/DocumentUpdateOneWithoutClientNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutClientNestedInput } from "../inputs/OrderUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    documentId?: NullableStringFieldUpdateOperationsInput | undefined;
    addressId?: NullableStringFieldUpdateOperationsInput | undefined;
    document?: DocumentUpdateOneWithoutClientNestedInput | undefined;
    address?: AddressUpdateOneWithoutClientNestedInput | undefined;
    Orders?: OrderUpdateManyWithoutClientNestedInput | undefined;
}
