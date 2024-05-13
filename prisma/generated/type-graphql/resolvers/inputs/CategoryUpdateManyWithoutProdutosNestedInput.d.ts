import { CategoryCreateOrConnectWithoutProdutosInput } from "../inputs/CategoryCreateOrConnectWithoutProdutosInput";
import { CategoryCreateWithoutProdutosInput } from "../inputs/CategoryCreateWithoutProdutosInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutProdutosInput } from "../inputs/CategoryUpdateManyWithWhereWithoutProdutosInput";
import { CategoryUpdateWithWhereUniqueWithoutProdutosInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutProdutosInput";
import { CategoryUpsertWithWhereUniqueWithoutProdutosInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutProdutosInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateManyWithoutProdutosNestedInput {
    create?: CategoryCreateWithoutProdutosInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProdutosInput[] | undefined;
    upsert?: CategoryUpsertWithWhereUniqueWithoutProdutosInput[] | undefined;
    set?: CategoryWhereUniqueInput[] | undefined;
    disconnect?: CategoryWhereUniqueInput[] | undefined;
    delete?: CategoryWhereUniqueInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
    update?: CategoryUpdateWithWhereUniqueWithoutProdutosInput[] | undefined;
    updateMany?: CategoryUpdateManyWithWhereWithoutProdutosInput[] | undefined;
    deleteMany?: CategoryScalarWhereInput[] | undefined;
}
