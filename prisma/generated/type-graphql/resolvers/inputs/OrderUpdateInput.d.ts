import { ClientUpdateOneRequiredWithoutOrdersNestedInput } from "../inputs/ClientUpdateOneRequiredWithoutOrdersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OrderItemUpdateManyWithoutOrderNestedInput } from "../inputs/OrderItemUpdateManyWithoutOrderNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrderUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    totalPrice?: FloatFieldUpdateOperationsInput | undefined;
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput | undefined;
    client?: ClientUpdateOneRequiredWithoutOrdersNestedInput | undefined;
}
