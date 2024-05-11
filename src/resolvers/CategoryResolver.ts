import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../models/Category";

@Resolver()
export class CategoryResolver {
  private data: Array<Category> = [];

  @Query((_type) => [Category])
  async getCategories() {
    return this.data;
  }

  @Query((_type) => Category)
  async getCategory(@Arg("id") id: string) {
    return this.data.find((category) => category.id === id);
  }

  @Query((_type) => Category)
  async getCategoryByName(@Arg("name") name: string) {
    return this.data.find((category) => category.name === name);
  }

  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string) {
    try {
      const category: Category = {
        id: crypto.randomUUID(),
        name,
      };
      this.data.push(category);
      return category;
    } catch (error) {
      throw error;
    }
  }
}
