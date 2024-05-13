import { OrderCreateManyProductInputEnvelope } from "../inputs/OrderCreateManyProductInputEnvelope";
import { OrderCreateOrConnectWithoutProductInput } from "../inputs/OrderCreateOrConnectWithoutProductInput";
import { OrderCreateWithoutProductInput } from "../inputs/OrderCreateWithoutProductInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderCreateNestedManyWithoutProductInput {
    create?: OrderCreateWithoutProductInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: OrderCreateManyProductInputEnvelope | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
}
