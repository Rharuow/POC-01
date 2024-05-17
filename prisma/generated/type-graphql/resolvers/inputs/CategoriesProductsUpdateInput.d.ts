import { CategoryUpdateOneRequiredWithoutProdutosNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProdutosNestedInput";
import { ProductUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutCategoriesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CategoriesProductsUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    category?: CategoryUpdateOneRequiredWithoutProdutosNestedInput | undefined;
    product?: ProductUpdateOneRequiredWithoutCategoriesNestedInput | undefined;
}
