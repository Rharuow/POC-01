import { ClientUpdateOneRequiredWithoutSalesNestedInput } from "../inputs/ClientUpdateOneRequiredWithoutSalesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutSaleNestedInput } from "../inputs/OrderUpdateManyWithoutSaleNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SaleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    totalPrice?: FloatFieldUpdateOperationsInput | undefined;
    orders?: OrderUpdateManyWithoutSaleNestedInput | undefined;
    client?: ClientUpdateOneRequiredWithoutSalesNestedInput | undefined;
}
