import { ClientCreateWithoutSalesInput } from "../inputs/ClientCreateWithoutSalesInput";
import { ClientUpdateWithoutSalesInput } from "../inputs/ClientUpdateWithoutSalesInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutSalesInput {
    update: ClientUpdateWithoutSalesInput;
    create: ClientCreateWithoutSalesInput;
    where?: ClientWhereInput | undefined;
}
