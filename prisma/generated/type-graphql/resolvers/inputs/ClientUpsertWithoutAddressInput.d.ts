import { ClientCreateWithoutAddressInput } from "../inputs/ClientCreateWithoutAddressInput";
import { ClientUpdateWithoutAddressInput } from "../inputs/ClientUpdateWithoutAddressInput";
import { ClientWhereInput } from "../inputs/ClientWhereInput";
export declare class ClientUpsertWithoutAddressInput {
    update: ClientUpdateWithoutAddressInput;
    create: ClientCreateWithoutAddressInput;
    where?: ClientWhereInput | undefined;
}
