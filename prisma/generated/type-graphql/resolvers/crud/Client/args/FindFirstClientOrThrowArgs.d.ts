import { ClientOrderByWithRelationInput } from "../../../inputs/ClientOrderByWithRelationInput";
import { ClientWhereInput } from "../../../inputs/ClientWhereInput";
import { ClientWhereUniqueInput } from "../../../inputs/ClientWhereUniqueInput";
export declare class FindFirstClientOrThrowArgs {
    where?: ClientWhereInput | undefined;
    orderBy?: ClientOrderByWithRelationInput[] | undefined;
    cursor?: ClientWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "deletedAt" | "updatedAt" | "name" | "email" | "documentId" | "addressId"> | undefined;
}
