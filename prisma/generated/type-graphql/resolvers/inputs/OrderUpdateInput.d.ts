import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutOrdersNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutOrdersNestedInput";
import { SaleUpdateOneRequiredWithoutOrdersNestedInput } from "../inputs/SaleUpdateOneRequiredWithoutOrdersNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class OrderUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    amount?: IntFieldUpdateOperationsInput | undefined;
    totalPrice?: FloatFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput | undefined;
    sale?: SaleUpdateOneRequiredWithoutOrdersNestedInput | undefined;
}
