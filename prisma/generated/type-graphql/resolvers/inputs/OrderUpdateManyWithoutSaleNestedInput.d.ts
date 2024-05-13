import { OrderCreateManySaleInputEnvelope } from "../inputs/OrderCreateManySaleInputEnvelope";
import { OrderCreateOrConnectWithoutSaleInput } from "../inputs/OrderCreateOrConnectWithoutSaleInput";
import { OrderCreateWithoutSaleInput } from "../inputs/OrderCreateWithoutSaleInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSaleInput } from "../inputs/OrderUpdateManyWithWhereWithoutSaleInput";
import { OrderUpdateWithWhereUniqueWithoutSaleInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSaleInput";
import { OrderUpsertWithWhereUniqueWithoutSaleInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSaleInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutSaleNestedInput {
    create?: OrderCreateWithoutSaleInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSaleInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutSaleInput[] | undefined;
    createMany?: OrderCreateManySaleInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutSaleInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutSaleInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
