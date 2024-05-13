import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Address } from "../../prisma/generated/type-graphql";
import { prisma } from "../../prisma";

@Resolver()
export class AddressResolver {
  @Query((_type) => [Address])
  async getAddresses() {
    const addresses = await prisma.address.findMany();
    return addresses;
  }

  @Query((_type) => Address)
  async getAddress(@Arg("id") id: string) {
    const address = await prisma.address.findUniqueOrThrow({
      where: { id },
    });

    return address;
  }

  @Query((_type) => Address)
  async getAddressByBilling(
    @Arg("billing", { nullable: true }) billing?: string
  ) {
    const address = await prisma.address.findUniqueOrThrow({
      where: { billing },
    });

    return address;
  }

  @Query((_type) => Address)
  async getAddressByDelivery(
    @Arg("delivery", { nullable: true }) delivery?: string
  ) {
    const address = await prisma.address.findUniqueOrThrow({
      where: { delivery },
    });

    return address;
  }

  @Mutation((_type) => Address)
  async createAddress(
    @Arg("billing", { nullable: true }) billing?: string,
    @Arg("delivery", { nullable: true }) delivery?: string
  ) {
    try {
      const addressBilling = await this.getAddressByBilling(billing);
      const addressDelivery = await this.getAddressByDelivery(delivery);
      if (addressBilling || addressDelivery)
        throw new Error("Address already exists");

      const address = await prisma.address.create({
        data: { billing, delivery },
      });
      return address;
    } catch (error) {
      throw error;
    }
  }
}
