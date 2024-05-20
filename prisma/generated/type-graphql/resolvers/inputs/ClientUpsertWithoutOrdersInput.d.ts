import { ClientCreateWithoutOrdersInput } from "../inputs/ClientCreateWithoutOrdersInput";
import { ClientUpdateWithoutOrdersInput } from "../inputs/ClientUpdateWithoutOrdersInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutOrdersInput {
    update: ClientUpdateWithoutOrdersInput;
    create: ClientCreateWithoutOrdersInput;
    where?: ClientWhereInput | undefined;
}
