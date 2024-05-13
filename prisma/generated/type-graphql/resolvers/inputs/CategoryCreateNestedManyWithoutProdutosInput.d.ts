import { CategoryCreateOrConnectWithoutProdutosInput } from "../inputs/CategoryCreateOrConnectWithoutProdutosInput";
import { CategoryCreateWithoutProdutosInput } from "../inputs/CategoryCreateWithoutProdutosInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedManyWithoutProdutosInput {
    create?: CategoryCreateWithoutProdutosInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProdutosInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
}
