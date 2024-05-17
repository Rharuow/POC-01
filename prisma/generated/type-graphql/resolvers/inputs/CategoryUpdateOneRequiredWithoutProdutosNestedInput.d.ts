import { CategoryCreateOrConnectWithoutProdutosInput } from "../inputs/CategoryCreateOrConnectWithoutProdutosInput";
import { CategoryCreateWithoutProdutosInput } from "../inputs/CategoryCreateWithoutProdutosInput";
import { CategoryUpdateToOneWithWhereWithoutProdutosInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutProdutosInput";
import { CategoryUpsertWithoutProdutosInput } from "../inputs/CategoryUpsertWithoutProdutosInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneRequiredWithoutProdutosNestedInput {
    create?: CategoryCreateWithoutProdutosInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProdutosInput | undefined;
    upsert?: CategoryUpsertWithoutProdutosInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutProdutosInput | undefined;
}
