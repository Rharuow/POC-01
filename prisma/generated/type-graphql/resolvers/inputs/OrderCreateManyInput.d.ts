export declare class OrderCreateManyInput {
    id?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
    amount?: number | undefined;
    totalPrice: number;
    productId: string;
    saleId: string;
}
