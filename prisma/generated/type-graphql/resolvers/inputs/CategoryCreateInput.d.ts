import { ProductCreateNestedManyWithoutCategoriesInput } from "../inputs/ProductCreateNestedManyWithoutCategoriesInput";
export declare class CategoryCreateInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    name: string;
    produtos?: ProductCreateNestedManyWithoutCategoriesInput | undefined;
}
