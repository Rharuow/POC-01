import { ClientCreateInput } from "../../../inputs/ClientCreateInput";
import { ClientUpdateInput } from "../../../inputs/ClientUpdateInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
export declare class UpsertOneClientArgs {
    where: ClientWhereUniqueInput;
    create: ClientCreateInput;
    update: ClientUpdateInput;
}
