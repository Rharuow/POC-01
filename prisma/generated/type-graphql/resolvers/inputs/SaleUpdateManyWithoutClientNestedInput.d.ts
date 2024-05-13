import { SaleCreateManyClientInputEnvelope } from "../inputs/SaleCreateManyClientInputEnvelope";
import { SaleCreateOrConnectWithoutClientInput } from "../inputs/SaleCreateOrConnectWithoutClientInput";
import { SaleCreateWithoutClientInput } from "../inputs/SaleCreateWithoutClientInput";
import { SaleScalarWhereInput } from "../inputs/SaleScalarWhereInput";
import { SaleUpdateManyWithWhereWithoutClientInput } from "../inputs/SaleUpdateManyWithWhereWithoutClientInput";
import { SaleUpdateWithWhereUniqueWithoutClientInput } from "../inputs/SaleUpdateWithWhereUniqueWithoutClientInput";
import { SaleUpsertWithWhereUniqueWithoutClientInput } from "../inputs/SaleUpsertWithWhereUniqueWithoutClientInput";
import { SaleWhereUniqueInput } from "../inputs/SaleWhereUniqueInput";
export declare class SaleUpdateManyWithoutClientNestedInput {
    create?: SaleCreateWithoutClientInput[] | undefined;
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput[] | undefined;
    upsert?: SaleUpsertWithWhereUniqueWithoutClientInput[] | undefined;
    createMany?: SaleCreateManyClientInputEnvelope | undefined;
    set?: SaleWhereUniqueInput[] | undefined;
    disconnect?: SaleWhereUniqueInput[] | undefined;
    delete?: SaleWhereUniqueInput[] | undefined;
    connect?: SaleWhereUniqueInput[] | undefined;
    update?: SaleUpdateWithWhereUniqueWithoutClientInput[] | undefined;
    updateMany?: SaleUpdateManyWithWhereWithoutClientInput[] | undefined;
    deleteMany?: SaleScalarWhereInput[] | undefined;
}
