import { AddressUpdateOneRequiredWithoutClientNestedInput } from "../inputs/AddressUpdateOneRequiredWithoutClientNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { SaleUpdateManyWithoutClientNestedInput } from "../inputs/SaleUpdateManyWithoutClientNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ClientUpdateWithoutDocumentInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    address?: AddressUpdateOneRequiredWithoutClientNestedInput | undefined;
    sales?: SaleUpdateManyWithoutClientNestedInput | undefined;
}
