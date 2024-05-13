import { SaleCreateManyClientInputEnvelope } from "../inputs/SaleCreateManyClientInputEnvelope";
import { SaleCreateOrConnectWithoutClientInput } from "../inputs/SaleCreateOrConnectWithoutClientInput";
import { SaleCreateWithoutClientInput } from "../inputs/SaleCreateWithoutClientInput";
import { SaleWhereUniqueInput } from "../inputs/SaleWhereUniqueInput";
export declare class SaleCreateNestedManyWithoutClientInput {
    create?: SaleCreateWithoutClientInput[] | undefined;
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput[] | undefined;
    createMany?: SaleCreateManyClientInputEnvelope | undefined;
    connect?: SaleWhereUniqueInput[] | undefined;
}
