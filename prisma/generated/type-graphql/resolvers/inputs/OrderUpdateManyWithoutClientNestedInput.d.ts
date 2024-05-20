import { OrderCreateManyClientInputEnvelope } from "../inputs/OrderCreateManyClientInputEnvelope";
import { OrderCreateOrConnectWithoutClientInput } from "../inputs/OrderCreateOrConnectWithoutClientInput";
import { OrderCreateWithoutClientInput } from "../inputs/OrderCreateWithoutClientInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutClientInput } from "../inputs/OrderUpdateManyWithWhereWithoutClientInput";
import { OrderUpdateWithWhereUniqueWithoutClientInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutClientInput";
import { OrderUpsertWithWhereUniqueWithoutClientInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutClientInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutClientNestedInput {
    create?: OrderCreateWithoutClientInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: OrderCreateManyClientInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
