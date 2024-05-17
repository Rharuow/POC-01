import { CategoryCreateWithoutProdutosInput } from "../inputs/CategoryCreateWithoutProdutosInput";
import { CategoryUpdateWithoutProdutosInput } from "../inputs/CategoryUpdateWithoutProdutosInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
export declare class CategoryUpsertWithoutProdutosInput {
    update: CategoryUpdateWithoutProdutosInput;
    create: CategoryCreateWithoutProdutosInput;
    where?: CategoryWhereInput | undefined;
}
