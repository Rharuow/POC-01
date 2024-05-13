import { CategoryCreateNestedManyWithoutProdutosInput } from "../inputs/CategoryCreateNestedManyWithoutProdutosInput";
import { OrderCreateNestedManyWithoutProductInput } from "../inputs/OrderCreateNestedManyWithoutProductInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    description: string;
    inventory_quantity?: number | undefined;
    categories?: CategoryCreateNestedManyWithoutProdutosInput | undefined;
    orders?: OrderCreateNestedManyWithoutProductInput | undefined;
}
