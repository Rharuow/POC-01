import { OrderCreateManySaleInputEnvelope } from "../inputs/OrderCreateManySaleInputEnvelope";
import { OrderCreateOrConnectWithoutSaleInput } from "../inputs/OrderCreateOrConnectWithoutSaleInput";
import { OrderCreateWithoutSaleInput } from "../inputs/OrderCreateWithoutSaleInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutSaleInput {
    create?: OrderCreateWithoutSaleInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSaleInput[] | undefined;
    createMany?: OrderCreateManySaleInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
