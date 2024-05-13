import { ClientOrderByWithRelationInput } from "../../../inputs/ClientOrderByWithRelationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
export declare class AggregateClientArgs {
    where?: ClientWhereInput | undefined;
    orderBy?: ClientOrderByWithRelationInput[] | undefined;
    cursor?: ClientWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
