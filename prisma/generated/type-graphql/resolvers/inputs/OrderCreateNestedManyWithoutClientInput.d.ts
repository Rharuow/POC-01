import { OrderCreateManyClientInputEnvelope } from "../inputs/OrderCreateManyClientInputEnvelope";
import { OrderCreateOrConnectWithoutClientInput } from "../inputs/OrderCreateOrConnectWithoutClientInput";
import { OrderCreateWithoutClientInput } from "../inputs/OrderCreateWithoutClientInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutClientInput {
    create?: OrderCreateWithoutClientInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: OrderCreateManyClientInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
