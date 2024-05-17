import { CategoryCreateNestedOneWithoutProdutosInput } from "../inputs/CategoryCreateNestedOneWithoutProdutosInput";
import { ProductCreateNestedOneWithoutCategoriesInput } from "../inputs/ProductCreateNestedOneWithoutCategoriesInput";
export declare class CategoriesProductsCreateInput {
    id?: string | undefined;
    category: CategoryCreateNestedOneWithoutProdutosInput;
    product: ProductCreateNestedOneWithoutCategoriesInput;
}
