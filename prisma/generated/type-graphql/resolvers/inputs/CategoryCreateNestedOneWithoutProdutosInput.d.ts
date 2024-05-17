import { CategoryCreateOrConnectWithoutProdutosInput } from "../inputs/CategoryCreateOrConnectWithoutProdutosInput";
import { CategoryCreateWithoutProdutosInput } from "../inputs/CategoryCreateWithoutProdutosInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedOneWithoutProdutosInput {
    create?: CategoryCreateWithoutProdutosInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProdutosInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
}
