import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderItemWhereInput {
    AND?: OrderItemWhereInput[] | undefined;
    OR?: OrderItemWhereInput[] | undefined;
    NOT?: OrderItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    deletedAt?: DateTimeNullableFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    amount?: IntFilter | undefined;
    totalPrice?: FloatFilter | undefined;
    productId?: StringFilter | undefined;
    orderId?: StringFilter | undefined;
    product?: ProductRelationFilter | undefined;
    order?: OrderRelationFilter | undefined;
}
