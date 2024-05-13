import { OrderCreateManyProductInputEnvelope } from "../inputs/OrderCreateManyProductInputEnvelope";
import { OrderCreateOrConnectWithoutProductInput } from "../inputs/OrderCreateOrConnectWithoutProductInput";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutProductInput } from "../inputs/OrderUpdateManyWithWhereWithoutProductInput";
import { OrderUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutProductInput";
import { OrderUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutProductInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutProductNestedInput {
    create?: OrderCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: OrderCreateManyProductInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
