import { ClientCountOrdersArgs } from "./args/ClientCountOrdersArgs";
export declare class ClientCount {
    Orders: number;
    getOrders(root: ClientCount, args: ClientCountOrdersArgs): number;
}
