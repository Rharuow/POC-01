import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutOrderItemsNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutOrderItemsNestedInput";
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutOrderItemsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrderItemUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    amount?: IntFieldUpdateOperationsInput | undefined;
    totalPrice?: FloatFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput | undefined;
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput | undefined;
}
