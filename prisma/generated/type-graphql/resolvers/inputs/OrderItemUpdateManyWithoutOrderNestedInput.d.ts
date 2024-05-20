import { OrderItemCreateManyOrderInputEnvelope } from "../inputs/OrderItemCreateManyOrderInputEnvelope";
import { OrderItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderItemCreateOrConnectWithoutOrderInput";
import { OrderItemCreateWithoutOrderInput } from "../inputs/OrderItemCreateWithoutOrderInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderItemUpdateManyWithWhereWithoutOrderInput";
import { OrderItemUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutOrderInput";
import { OrderItemUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutOrderInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";
export declare class OrderItemUpdateManyWithoutOrderNestedInput {
    create?: OrderItemCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput[] | undefined;
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | undefined;
    createMany?: OrderItemCreateManyOrderInputEnvelope | undefined;
    set?: OrderItemWhereUniqueInput[] | undefined;
    disconnect?: OrderItemWhereUniqueInput[] | undefined;
    delete?: OrderItemWhereUniqueInput[] | undefined;
    connect?: OrderItemWhereUniqueInput[] | undefined;
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | undefined;
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput[] | undefined;
    deleteMany?: OrderItemScalarWhereInput[] | undefined;
}
