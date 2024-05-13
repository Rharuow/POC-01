import { SaleCreateWithoutOrdersInput } from "../inputs/SaleCreateWithoutOrdersInput";
import { SaleUpdateWithoutOrdersInput } from "../inputs/SaleUpdateWithoutOrdersInput";
import { SaleWhereInput } from "../inputs/SaleWhereInput";
export declare class SaleUpsertWithoutOrdersInput {
    update: SaleUpdateWithoutOrdersInput;
    create: SaleCreateWithoutOrdersInput;
    where?: SaleWhereInput | undefined;
}
